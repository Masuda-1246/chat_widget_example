import json
from flask import Flask, request
app = Flask(__name__)
@app.route('/')
def get_request():
    value = request.args.get('text', '')
    callback = request.args.get('callback', '')
    dic = {'output' : [{'type' : 'text', 'value' : value }] }
    contents = callback + '(' + json.dumps(dic) + ')'
    return contents
if __name__ == "__main__":
    app.run(debug=True)