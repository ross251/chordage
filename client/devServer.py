import os
import requests
from flask import Flask, render_template, request

app = Flask(__name__,
  template_folder='./src')

@app.route("/")
def index():
  return render_template('index.html')

@app.route('/api/<path>')
def reroute(path):
  reroute_url = request.url.replace('localhost:3000', 'localhost:5000')
  print(reroute_url)
  return requests.get(reroute_url).content



'''@app.route("/tabdata", methods=['GET'])
def getData():
  dir_path = request.args.get('dir')
  data_dict = getTabVisData(dir_path)
  return jsonify(data_dict)
'''


if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 3000), debug=True)