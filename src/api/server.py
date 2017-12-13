from flask import Flask, jsonify
import os

PORT = int(os.environ.get('PORT') or '5000')

app = Flask(__name__)

@app.route('/api/dogs')
def dogs():
    return jsonify({'dogs': [
      { 'name': 'Tobby', 'breed': 'Affenpinscher', 'age': 5 },
      { 'name': 'Rex', 'breed': 'Airedale Terrier', 'age': 6 },
      { 'name': 'Pug', 'breed': 'Beagle', 'age': 2 }
    ]})

if __name__ == '__main__':
    app.run(debug=True, port=PORT, host='0.0.0.0')
