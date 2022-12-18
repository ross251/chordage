import os
import shutil
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from getVisData import getTabVisData
from getTabList import getTabList

app = Flask(__name__)
CORS(app)

@app.route("/api/tablist", methods=['GET'])
def tabList():
  dir_path = '../data/tab_visualizations'
  tab_list = getTabList(dir_path)
  return jsonify(tab_list)

@app.route("/api/tabdata", methods=['GET'])
def getData():
  dir_path = request.args.get('dir')
  data_dict = getTabVisData(dir_path)
  return jsonify(data_dict)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 5000), debug=True)