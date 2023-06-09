import json
from flask import Flask, request
app = Flask(__name__)
@app.route('/')
def get_request():
    value = request.args.get('text', '')
    callback = request.args.get('callback', '')
    message = f"「{value}」を受け取りました。"
    dic = {'output' : [{'type' : 'text', 'value' : message }] }
    contents = callback + '(' + json.dumps(dic) + ')'
    return contents
if __name__ == "__main__":
    app.run(debug=True)