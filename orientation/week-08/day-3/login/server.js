'use strict';

const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (res, req) => {
  res.sendFile('index.html');
});

app.post('/send', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`waiting @ 3k`);
});