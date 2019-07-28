from tkinter import *

window=Tk()

def km():
  miles=float(e1_value.get())*1.6
  t1.insert(END, miles)

buttonText="asdf"
b1=Button(window, text=buttonText, command=km)
b1.grid(row=0, column=0)

e1_value=StringVar()
e1=Entry(window, textvariable=e1_value, width=12)
e1.grid(row=0, column=1)


t1=Text(window, height=10, width= 20)
t1.grid(row=0, column=2)

# prettify(respond(e1_value))

window.mainloop()