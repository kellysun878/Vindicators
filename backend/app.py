from flask import Flask, jsonify
from flask_restful import Resource, Api
import subprocess
from subprocess import call
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

def send(res):
  response = jsonify(res)
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response

class hello_world(Resource):
    def get(self, journal):
      val = subprocess.check_call("./script.sh '%s'" % journal, shell=True)
      
      with open("result.txt", "r") as f:
        s = f.read()
      return send({"result": s, "journal": journal})
    
api.add_resource(hello_world, "/<string:journal>")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)