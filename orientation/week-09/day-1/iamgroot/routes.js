'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (typeof req.query.message === 'undefined') {
    res.status(400);
    res.json(JSON.parse(`{"error": "I am Groot!"}`));
  } else {
    res.status(200);
  res.json(JSON.parse(`{"received": "message", "translated": "I am Groot!"}`));    
  }
});

module.exports = app;