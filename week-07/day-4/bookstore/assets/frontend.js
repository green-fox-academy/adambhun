'use strict';

let httpRequest = new XMLHttpRequest();
let payload = "";


const button1 = document.querySelector('#bookname');
button1.onclick = () => {
  httpRequest.open('GET', 'http://localhost:3000/book_name', true);
  httpRequest.onload = (send) => {
    payload = JSON.parse(send.target.responseText);
    
    for (let index = 0; index < payload.length; index++) {
      let lst = document.createElement("li");
      lst.innerHTML = payload[index].book_name;
      document.querySelector("ul").appendChild(lst);
    }
  }
  httpRequest.send();
}

const button2 = document.querySelector('#autname');
button2.onclick = () => {
  httpRequest.open('GET', 'http://localhost:3000/authors_name', true);
  httpRequest.onload = (send) => {
    payload = JSON.parse(send.target.responseText);
    
    for (let index = 0; index < payload.length; index++) {
      let lst = document.createElement("li");
      lst.innerHTML = payload[index].aut_name;
      document.querySelector("ul").appendChild(lst);
    }
  }
  httpRequest.send();
}

const gettable = document.querySelector('#get_table');
gettable.onclick = () => {
  httpRequest.open('GET', 'http://localhost:3000/table', true);
  httpRequest.onload = (send) => {
    console.log(send.target.responseText);
    
    payload = JSON.parse(send.target.responseText);
  }
  httpRequest.send();
}