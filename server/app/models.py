from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    
    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"
    
    def __serialize__(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }