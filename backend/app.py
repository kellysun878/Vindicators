from flask import Flask, jsonify
import subprocess
from subprocess import call

app = Flask(__name__)

def send(res):
  response = jsonify(res)
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response

@app.route("/")
def hello_world():
    res = call("./script.sh", shell=True)

    with open("result.txt", "r") as f:
      s = f.read()
    return send({"result": '<img src="https://i.kym-cdn.com/photos/images/original/001/211/814/a1c.jpg" alt="cowboy" />', "testing sentiment analysis": s})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)