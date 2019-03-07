'use strict';

let httpRequest = new XMLHttpRequest();
let payload = "";

httpRequest.open('GET', 'http://localhost:3000/book_name', true);
httpRequest.send();

console.log("fasz");
httpRequest.onload = (send) => {
  console.log(send);
  payload = JSON.parse(send.target.responseText);
  console.log(payload);
  
  for (let index = 0; index < payload.length; index++) {
    let lst = document.createElement("li");
    lst.innerHTML = payload[index].book_name;
    document.querySelector("ul").appendChild(lst);
  }
}

// let lst = document.createElement("li");
// lst.innerHTML = payload.response.docs[0].headline.main;
// let lst2 = document.createElement("li");
// lst2.innerHTML = payload.response.docs[0].snippet;
// let lst3 = document.createElement("li");
// lst3.innerHTML = payload.response.docs[0].pub_date;
// let lnk = document.createElement("a");
// lnk.href = payload.response.docs[0].web_url;
// lnk.innerHTML = 'link to article';
// document.querySelector("body").appendChild(lst);
// document.querySelector("body").appendChild(lst2);
// document.querySelector("body").appendChild(lst3);
// document.querySelector("body").appendChild(lnk);
