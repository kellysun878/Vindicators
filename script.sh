#!/bin/bash

cd python-language/samples/snippets/sentiment
echo "This is a test. I hate life. But I love murdering people." > file.txt
python3 sentiment_analysis.py file.txt
# echo "Hi"