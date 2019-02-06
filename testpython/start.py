#!/usr/bin/python
from pythainlp.tokenize import word_tokenize

textdoc = ("shoppeeterm.txt")
"""
f = open("shoppeeterm.txt", "r", encoding="utf8")
f = f.read().replace('\n', '')
print(f.read())
"""
with open('shoppeeterm.txt', 'r', encoding="utf8") as myfile:
   data=myfile.read().replace('\n', '')

b = word_tokenize(data,engine='mm')

print(b)