import logging
import os
import random
import time
import uuid
import flask

from datetime import datetime
from flask import Flask, request, send_from_directory
from flask_cors import CORS
from database import db, database_path
from models import InferResult

logging.getLogger().setLevel(logging.NOTSET)


def init_app():
    app = Flask(__name__, static_folder='static', static_url_path="/")
    app.config['IMAGES_FOLDER'] = 'uploaded_images'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + database_path
    db.init_app(app)
    db.app = app
    db.create_all()
    CORS(app)
    return app

app = init_app()

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/evaluate/<any(model_1, model_2, model_3):model_name>', methods=['POST'])
def evaluate(model_name):  # put application's code here
    # 1. get file
    file = request.files['file']
    consent = request.form['consent']
    filename = None

    app.logger.info(
        f'Received request with data: filePresent:{file is not None}, consent:{consent}, model_name:{model_name}')

    # Accept only jpeg
    if file.mimetype != 'image/jpeg':
        app.logger.error(f'Received request with file that is not an image')
        return '', 400

    if consent == "true":
        filename = str(uuid.uuid4())
        file.save(os.path.join(app.config['IMAGES_FOLDER'], str(filename) + '.jpg'))
        app.logger.info(f'Received file saved as {filename}')

    # 2. evaluate
    # TODO: In this part, request to tensorflow model should be sent.
    fake_result = str(random.randint(1, 5))
    # Add sleep to imitate wait needed for the NN model to infer
    time.sleep(15)

    # 3. save to database result
    infer_result = InferResult(filename=filename, time=datetime.now(), model_used=model_name, result=fake_result)
    app.logger.info(f'Saving entry to database: {infer_result}')

    db.session.add(infer_result)
    db.session.commit()
    return flask.jsonify(result=fake_result)


if __name__ == '__main__':
    app.run()
