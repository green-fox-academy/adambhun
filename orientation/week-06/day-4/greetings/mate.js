'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// set view engine as ejs
app.set('view engine', 'ejs');

// get root page
app.get('/', (req, res) => {
  let data = req.query;
  // send the index.ejs file to the browser with the data object
  res.render('mate', data);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});