import os
import shutil
from flask import Flask, render_template, request
from datetime import datetime, date, timedelta
import json
import sqlite3
import sys
# caution: path[0] is reserved for script path (or '' in REPL)
sys.path.append('./python')
from getVisData import getTabVisData

app = Flask(__name__)

@app.route("/")
def index():
  dir_path = '/home/ross/dev/projects/chordage/data/tab_visualizations/tester1'
  data_dict = getTabVisData(dir_path)
  return render_template('index.html', data=data_dict)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 4242), debug=True)