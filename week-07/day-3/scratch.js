'use strict';
const express = require('express')
const path = require('path');
const app = express();
const PORT = 3000;
let httpRequest = new XMLHttpRequest();
const api = "http://api.giphy.com /v1/gifs/search";
var apiKey = "&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ";
var query = "?q=rainbow";
var limit = "&limit=16"

app.use(express.json());

for (let index = 0; index < 16; index++) {
  createImg(arr.data[index].images.original.url);  
}

app.get('api.giphy.com/v1/gifs/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  res.json({
    u
  });

});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ&limit=5