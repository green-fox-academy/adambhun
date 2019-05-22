'use strict';

//FIXME: DELETE UNNECESSARY

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
// let router = express.Router();
// app.set('view engine', 'ejs');
app.use('/frontend', express.static(__dirname + '/frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Listening @ port ${port}`);
});

require('dotenv').config();
const mysql = require('mysql');
let conn;
try {
  conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
});
console.log(`Connection to ${process.env.DB_DATABASE} created.`);
}catch (e) {
  console.log(`Connection to ${process.env.DB_DATABASE} has failed`);
  console.error(e);
}


//HOME
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/home.html'));
  // let payload = ['Please fill the form', 'URL', 'Alias'];
  // res.render('home', { payload: payload });
});

//LIST ATTR
app.get('/attractions', (req, res) => {
  let filter = req.body.filter || '';
  conn.query(`SELECT * FROM attractions${filter};`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    }
    res.send(rows);
  });
});

//POST ATTR
app.post('/add', (req, res) => {
  if (typeof req.body.id === 'undefined') {
    conn.query(`INSERT INTO attractions VALUES ());`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
      }
    });
  } else {
    conn.query(`UPDATE TABLE;`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
      }
    });
  }
});