#!/bin/bash

export GOOGLE_APPLICATION_CREDENTIALS="/usr/backend/astrotherapy-5406e0f3c9f2.json"
cd ./python-language/samples/snippets/sentiment
pip install -r requirements.txt
echo $1 > file.txt
python3 sentiment_analysis.py file.txt > result.txt
cp result.txt ../../../../result.txt