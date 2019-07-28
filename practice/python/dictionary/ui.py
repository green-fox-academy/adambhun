import json
from difflib import get_close_matches
from tkinter import *
# import tkinter

# UI

window=Tk()

buttonText="Describe this:"
b1=Button(window, text=buttonText, command = lambda: prettify(respond))
b1.grid(row=0, column=0)

word=StringVar()
e1=Entry(window, textvariable=word, width=30)
e1.grid(row=1, column=0)

t1=Text(window, height=16, width= 48)
t1.grid(row=2, column=0)

#FUN

data = json.load(open("data.json", "r"))

def yes(match):
  respond(match)

def no():
  return "asedf"


def fuckup(word, match):
  print("fuck")
  window.wait_variable(word)
  word = word.get().lower()

  if word == "y":
    return data[match]

  elif word == "n":
    b1.config(text="Then wot?")
    window.wait_variable(word)
    return word.get().lower()

  else:
    b1.config(text="'y' or 'n' you cunt.")
    window.wait_variable(word)
    word = word.get().lower()
    return fuckup(word, match)

def respond(word):
  print("resp")
  # buttonText="Describe this:"
  reacted = BooleanVar
  if type(word) is str:
    print(word)
  else:
    word = word.get().lower()
  match = get_close_matches(word, data.keys(), 1, 0.6)[0]


  if word in data:
    print("resp2")
    return data[word]


  elif data[match]:
    b1.config(text="Didja mean %s?" %match)
    e1.delete(first=0, last=len(word))
    # return(fuckup(word, match))
    bno=Button(window, text="no", command = no)
    bno.grid(row=0, column=1)
    byes=Button(window, text="yes", command=lambda: yes(match))
    byes.grid(row=0, column=2)
    window.wait_variable(reacted)

  else:
    b1.config(text="Wot?")

def prettify(respond):
  print("pretty")
  res = respond(word)
  for i in res:
    # print(" - %s\n" % i)    # python 2
    t1.insert(END, f" - {i}\n")    # python3

window.mainloop()