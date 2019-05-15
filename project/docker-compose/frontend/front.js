'use strict';

document.querySelector('#list').addEventListener('click', list);

function list() {
  // let url = document.URL;
  let http = new XMLHttpRequest();
  http.open("GET", 'http://localhost:9006/list', true);
  http.onload = (e) => {
    console.log(http.responseText);    
    // let payload = JSON.parse(http.responseText);
    // console.log(payload);
  }    
  http.send();
}