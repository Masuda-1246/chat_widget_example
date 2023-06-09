#!/bin/sh

python -m venv env
source ./env/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt