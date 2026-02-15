from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/cosmology')
def cosmology():
    return render_template('cosmology.html')

@app.route('/relativity')
def relativity():
    return render_template('relativity.html')

@app.route('/thermodynamics')
def thermodynamics():
    return render_template('thermodynamics.html')

@app.route('/timeline')
def timeline():
    return render_template('timeline.html')

if __name__ == '__main__':
    app.run(debug=True)
