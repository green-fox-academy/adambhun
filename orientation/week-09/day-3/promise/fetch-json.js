'use strict';

var qio = require('q-io/http');

qio.read('http://localhost:1337')
  .then(function (data) {
    console.log(JSON.parse(data));
  });