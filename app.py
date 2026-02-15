from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///site.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Database Model
class Visit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_ip = db.Column(db.String(50), nullable=True)

    def __repr__(self):
        return f"Visit(id={self.id}, timestamp={self.timestamp})"

# Helper to record visits (can be used on any route)
def record_visit():
    try:
        if request.headers.getlist("X-Forwarded-For"):
            visitor_ip = request.headers.getlist("X-Forwarded-For")[0]
        else:
            visitor_ip = request.remote_addr

        new_visit = Visit(user_ip=visitor_ip)
        db.session.add(new_visit)
        db.session.commit()
    except Exception as e:
        print(f"Error recording visit: {e}")

# Routes
@app.route('/')
def home():
    record_visit() # Record visit on landing page
    return render_template('home.html', title="Home")

@app.route('/about')
def about():
    return render_template('about.html', title="About Me")

@app.route('/projects')
def projects():
    return render_template('projects.html', title="Projects")

@app.route('/skills')
def skills():
    return render_template('skills.html', title="Skills")

@app.route('/contact')
def contact():
    return render_template('contact.html', title="Contact")

# Initialize DB
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
