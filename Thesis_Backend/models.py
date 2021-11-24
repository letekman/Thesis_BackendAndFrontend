from database import db


class InferResult(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(36), unique=True, nullable=True)
    time = db.Column(db.DateTime)
    model_used = db.Column(db.String(30))
    result = db.Column(db.String(2))

    def __repr__(self):
        return f'<{self.__class__.__name__} id:{self.id} filename:{self.filename} time:{self.time} ' \
               f'model_used:{self.model_used} result:{self.result}'
