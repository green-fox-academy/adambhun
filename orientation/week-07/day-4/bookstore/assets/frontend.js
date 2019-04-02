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
    payload = JSON.parse(send.target.responseText);
    for (let index = 0; index < payload.length; index++) {
      let trow = document.createElement("tr");
      document.querySelector("tr").appendChild(trow);
      let cell1 = document.createElement("td");
      cell1.innerHTML = payload[index].book_name;
      document.querySelector("tr").appendChild(cell1);
      let cell2 = document.createElement("td");
      cell2.innerHTML = payload[index].aut_name;
      document.querySelector("tr").appendChild(cell2);
      let cell3 = document.createElement("td");
      cell3.innerHTML = payload[index].cate_descrip;
      document.querySelector("tr").appendChild(cell3);
      let cell4 = document.createElement("td");
      cell4.innerHTML = payload[index].pub_name;
      document.querySelector("tr").appendChild(cell4);
      let cell5 = document.createElement("td");
      cell5.innerHTML = payload[index].book_price;
      document.querySelector("tr").appendChild(cell5);
    };
  }
  httpRequest.send();
}