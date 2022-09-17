import os
import shutil
from flask import Flask, render_template, request
from datetime import datetime, date, timedelta
import json
import sqlite3

app = Flask(__name__)

@app.route("/")
def index():
  return render_template('index.html')

if __name__ == "__main__":
  app.run(host='0.0.0.0', port= os.environ.get('PORT', 1242), debug=True)