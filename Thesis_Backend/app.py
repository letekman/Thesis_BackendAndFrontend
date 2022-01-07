import logging
import os
import uuid
import grpc
import numpy as np
import tensorflow as tf

from datetime import datetime
from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS
from database import db, database_path
from models import InferResult
from tensorflow_serving.apis import predict_pb2
from tensorflow_serving.apis import prediction_service_pb2_grpc

logging.getLogger().setLevel(logging.NOTSET)


def init_app():
    app = Flask(__name__, static_folder='static', static_url_path="/")
    app.config['IMAGES_FOLDER'] = 'uploaded_images'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + database_path
    app.config['TENSORFLOW_URL'] = "tensorflow:8500"
    db.init_app(app)
    db.app = app
    db.create_all()
    CORS(app)
    return app


app = init_app()


@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/evaluate/<any(VGG19_Normal, VGG19_Dropout, VGG19_BatchNormalization):model_name>', methods=['POST'])
def evaluate(model_name):
    # 1. get file from request
    file = request.files['file']
    consent = request.form['consent']
    filename = None

    app.logger.info(
        f'Received request with data: filePresent:{file is not None}, consent:{consent}, model_name:{model_name}')

    acceptable_types = ['image/jpeg', 'image/png', 'image/bmp']
    # Accept only jpeg
    if file.mimetype not in acceptable_types:
        app.logger.error(f'Received request with file that is not an image. Mimetype: {file.mimetype}')
        return '', 400

    if consent == "true":
        filename = str(uuid.uuid4())
        file.save(os.path.join(app.config['IMAGES_FOLDER'], str(filename) + '.jpg'))
        app.logger.info(f'Received file saved as {filename}')

    # 2. evaluate
    # 2.1 prepare request
    channel = grpc.insecure_channel(app.config['TENSORFLOW_URL'])
    predict_server = prediction_service_pb2_grpc.PredictionServiceStub(channel)
    grpc_request = predict_pb2.PredictRequest()
    grpc_request.model_spec.name = model_name

    # 2.2 Preprocess file
    file.seek(0)
    img = tf.io.decode_image(file.read(), channels=3)
    img = tf.image.resize(img, [224, 224])
    img = img / 127.5 - 1
    grpc_request.inputs['input_1'].CopyFrom(
        tf.make_tensor_proto(img, shape=([1, 224, 224, 3])))

    # 2.3 Send request to tensorflow server
    app.logger.info(f'Sending request to tensorflow_serving model: {model_name}')
    response = None
    try:
        response = predict_server.Predict(grpc_request, 10.0)
    except grpc.RpcError as error:
        app.logger.info(f'Received error from grpc service: {error}')

    if response is None:
        result = "ERROR FROM TENSORFLOW SERVER"
    else:
        app.logger.info(f'Received response from tensorflow_serving: {response}')
        result = np.argmax(response.outputs['softmax'].float_val)
        # 3. save result to database only if consent was given
        if consent == "true":
            result_database_entry = InferResult(filename=filename, time=datetime.now(), model_used=model_name, result=result)
            app.logger.info(f'Saving entry to database: {result_database_entry}')

            db.session.add(result_database_entry)
            db.session.commit()

    return jsonify(result=str(result))




if __name__ == '__main__':
    app.run()
