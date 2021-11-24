import os

from flask_sqlalchemy import SQLAlchemy
database_path = os.path.join('database', 'database.db')

db = SQLAlchemy()




