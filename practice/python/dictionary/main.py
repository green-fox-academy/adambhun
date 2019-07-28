import json
from difflib import get_close_matches

data = json.load(open("data.json", "r"))
word=input("Word to describe:\n")

def fuckup(clarify, match):
  if clarify == "y":
    return data[match]
  elif clarify == "n":
    return respond(input("Then wot?\n"))
  else:
    return fuckup(input("'y' or 'n' you cunt.\n"), match)

def respond(word):
  word = word.lower()
  match = get_close_matches(word, data.keys(), 1, 0.6)[0]
  if word in data:
    return data[word]
  elif data[match]:
    clarify = input("Didja mean %s?\n" % match)
    return(fuckup(clarify, match))
  else: return "Wot?\n"

def prettify(respond):
  res = respond
  for i in res:
    # print(" - %s\n" % i)    # python 2
    print(f" - {i}\n")    # python3


prettify(respond(word))