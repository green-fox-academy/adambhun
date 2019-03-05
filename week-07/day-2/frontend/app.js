'use strict';
const express = require('express')
const path = require('path');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.sendFile(path.join(__dirname, 'index.html'));
  var input = req.query.input;
  if (input === undefined) {
    res.json({
      error: "Please provide an input!"
    });
  } else {
    res.json({
      received: input,
      result: input * 2
    });
  }
});



app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});