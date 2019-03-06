'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let httpRequest = new XMLHttpRequest();
const api = "http://api.giphy.com /v1/gifs/search";
var apiKey = "&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ";
var query = "?q=rainbow";
var limit = "&limit=16"

createImg(httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=pulp+fiction&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ&limit=5', true));

console.log(httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=pulp+fiction&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ&limit=5', true));





// for (let index = 0; index < 16; index++) {
//   createImg(arr.data[index].images.original.url);  
// }

// http://api.giphy.com/v1/gifs/search?q=pulp+fiction&api_key=HvpwU1WH4C0t2feycYuc4yyixCHdkhIZ&limit=5