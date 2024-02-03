from flask import jsonify, request, Blueprint
from .models import User
import hashlib
from app import db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

auth = Blueprint('auth', __name__)


"""
ROUTE FOR REGISTERING A NEW USER
"""
@auth.route('/register', methods=['POST'])
def register_new_user():
    try:
        username = request.json.get('username')
        email = request.json.get('email')
        password = request.json.get('password')

        if not username or not email or not password:
            return jsonify({"msg": "Missing username, email or password"}), 400

        if User.query.filter_by(username=username).first():
            return jsonify({"msg": "Username already exists"}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({"msg": "Email already exists"}), 400

        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"msg": "User registered successfully"}), 201

    except Exception as e:
        print("Error during user registration:", str(e))

        return jsonify({"msg": "Error during registration"}), 500

"""
ROUTE FOR USER LOGIN
"""
@auth.route('/login', methods=['POST'])
def login_user():
    try:
        username = request.json.get('username')
        password = request.json.get('password')

        if not username or not password:
            return jsonify({"msg": "Missing username or password"}), 400

        user = User.query.filter_by(username=username).first()

        if not user:
            return jsonify({"msg": "User not found"}), 404

        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        if user.password != hashed_password:
            return jsonify({"msg": "Invalid password"}), 401
        
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    
    except Exception as e:
        print("Error during user registration:", str(e))

        return jsonify({"msg": "Login successful"}), 200


"""
ROUTE FOR USER LOGOUT
"""
@auth.route('/logout', methods=['POST'])
@jwt_required()
def logout_user():
    return jsonify({"msg": "User logged out"}), 200