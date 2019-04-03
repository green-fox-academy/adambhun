'use strict';

let httpRequest = new XMLHttpRequest();
const api = "http://api.giphy.com/v1/gifs/search";
const apiKey = "&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ";
const query = "?q=pulp+fiction";
const limit = "&limit=16";
let payload = "";


httpRequest.open('GET', `${api + query + apiKey + limit}`, true);
httpRequest.send(null);

httpRequest.onload = () => {
  payload = JSON.parse(httpRequest.responseText);
  for (let index = 0; index < 16; index++) {
    let img = document.createElement("img");
    img.src = payload.data[index].images.original.url;
    img.setAttribute("class", "img");
    document.querySelector("body").appendChild(img);
  }

  for (let i = 0; i < 16; i++) {
    let images = document.querySelectorAll(".img");
    images[i].onclick = () => {
      images[i].src = data.data[i].images.fixed_height.url;
    }
  }
}


// http://api.giphy.com/v1/gifs/search?q=pulp+fiction&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ&limit=5