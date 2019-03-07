'use strict';

let httpRequest = new XMLHttpRequest();
let payload = "";


const button = document.querySelector('#bookname');
button.onclick = () => {
  httpRequest.open('GET', 'http://localhost:3000/book_name', true);
  httpRequest.send();
  httpRequest.onload = (send) => {
    payload = JSON.parse(send.target.responseText);

    for (let index = 0; index < payload.length; index++) {
      let lst = document.createElement("li");
      lst.innerHTML = payload[index].book_name;
      document.querySelector("ul").appendChild(lst);
    }
  }
}

// const button = document.querySelector('#autname');
// button.onclick = () => {
//   httpRequest.open('GET', 'http://localhost:3000/authors_name', true);
//   httpRequest.send();
//   httpRequest.onload = (send) => {
//     payload = JSON.parse(send.target.responseText);

//     for (let index = 0; index < payload.length; index++) {
//       let lst = document.createElement("li");
//       lst.innerHTML = payload[index].aut_name;
//       document.querySelector("ul").appendChild(lst);
//     }
//   }
// }