#!/usr/bin/env python
# encoding: utf-8

import sys
sys.path.insert(0,'/anaconda/envs/azureml_py38/lib/python3.8/site-packages')

import json
from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return("Helo World")


app.run(port=80)

