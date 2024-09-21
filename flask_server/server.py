from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='../build', static_url_path='')

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# Keep your existing routes here

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))