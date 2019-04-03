'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todos', {todos: todos});
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});