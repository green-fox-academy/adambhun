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
  res.sendFile(path.join(__dirname, 'index.html'));
  var input = req.query.input;
  input === undefined ?
    res.json({
      error: "Please provide an input!"
    }) :
    res.json({
      received: input,
      result: input * 2
    });
});

app.get('/greeter', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  var name = req.query.name;
  var title = req.query.title;
  name === undefined && title === undefined ?
    res.json({ error: `Please provide a name and a title!` }) :
  name === undefined ?
    res.json({ error: `Please provide a name!` }) :
    title === undefined ?
      res.json({ error: `Please provide a title!` }) :
        res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
});

app.get('/appenda/:appendable', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  var input = req.query.appendable;
  input === undefined ?
  res.json({error: "404"}) :
  res.json({appended: `${input}a`});
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});