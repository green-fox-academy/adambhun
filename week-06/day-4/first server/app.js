'use strict';

const express = require('express'); // import express
const app = express(); // save express() to variable
const PORT = 3000; // set port of our server
const path = require('path');

// use static files in assets folder
app.use('/assets', express.static('assets'));

// serve our index.html to /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// different endpoint with query
app.get('/about', (req, res) => {
  console.log(req.query);
  let data = req.query;
  res.send(`<h1>This is about ${data.name} and ${data.day}</h1>`);
});

// endpoint with param
app.get('/contact/:id/:name', (req, res) => {
  res.send(`<h1>${req.params.id} , ${req.params.name}</h1>`);
});

//start server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});