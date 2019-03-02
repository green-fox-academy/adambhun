'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

app.use('/assets/css', express.static('assets/css'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});