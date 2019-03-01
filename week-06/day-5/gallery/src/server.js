'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT);