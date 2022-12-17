import os
import shutil
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from getVisData import getTabVisData
from getTabList import getTabList

app = Flask(__name__)
CORS(app)
#@app.route("/")
#def index():
#  data_dict = getTabVisData(dir_path + '/tester1')
#  return render_template('index.html', data=data_dict, tab_list=tab_list)

@app.route("/api/tablist", methods=['GET'])
def tabList():
  dir_path = '/home/ross/dev/projects/chordage/data/tab_visualizations'
  tab_list = getTabList(dir_path)
  return jsonify(tab_list)

@app.route("/api/tabdata", methods=['GET'])
def getData():
  dir_path = request.args.get('dir')
  print('#####################')
  print(dir_path)
  print('#####################')
  data_dict = getTabVisData(dir_path)
  return jsonify(data_dict)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 5000), debug=True)