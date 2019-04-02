'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  if (typeof req.query.distance === 'undefined' && typeof req.query.time === 'undefined' || typeof req.query.distance === 'undefined' || typeof req.query.time === 'undefined') {
    res.status(400);
    res.json(JSON.parse(`{"error": "no value"}`));

  } else if (req.query.distance === '0' && req.query.time === '0' || req.query.distance === '0' || req.query.time === '0') {
    res.status(400);
    res.json(JSON.parse(`{"error": "zero"}`));
  } else {
    let dist = req.query.distance;
    let time = req.query.time;
    let speed = dist / time;
    res.status(200);
    res.json(JSON.parse(`{"distance": ${dist}, "time": ${time}, "speed": ${speed}}`));    
  }
});

module.exports = app;