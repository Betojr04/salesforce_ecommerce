"""
This module initializes the Flask application, sets up database configurations,
and registers the application routes.
"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .config import Config
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
import os

db = SQLAlchemy()

"""
    Create and configure an instance of the Flask application.

    Initializes the database and migrations using Flask-SQLAlchemy and Flask-Migrate.
    Registers the 'auth' Blueprint for handling user related routes.

    Returns:
        app: The Flask application instance.
    """
def create_app():    
    app = Flask(__name__)
    env = os.getenv('FLASK_ENV')

    if env == 'development':
        
        app.config.from_object(Config)
    else:
        
        app.config.from_object(Config)
    
    CORS(app) 

    db.init_app(app)
    Migrate(app, db)
    
    jwt=JWTManager(app)

    # Import routes and models
    from .models import User
    from .auth import auth  


    # Register the api Blueprint with the app
    app.register_blueprint(auth)

    
    return app