import os
import shutil
from flask import Flask, render_template, request, jsonify
from datetime import datetime, date, timedelta
import json
import sqlite3
import sys
# caution: path[0] is reserved for script path (or '' in REPL)
sys.path.append('./python')
from getVisData import getTabVisData
from getTabList import getTabList

app = Flask(__name__)

@app.route("/")
def index():
  dir_path = '/home/ross/dev/projects/chordage/data/tab_visualizations'
  data_dict = getTabVisData(dir_path + '/tester1')
  tab_list = getTabList(dir_path)
  return render_template('index.html', data=data_dict, tab_list=tab_list)

@app.route("/tabdata", methods=['GET'])
def getData():
  dir_path = request.args.get('dir')
  data_dict = getTabVisData(dir_path)
  return jsonify(data_dict)



if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 4242), debug=True)