'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');
app.use("/assets", express.static("assets"));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
  //port: '3000',
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    console.error();
    return;
  }
  console.log('DB is connected');
}); 
// conn.end();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/bookstore.html'));
});

app.get('/book_name', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    console.log(rows);
  });
});

app.get('/authors_name', (req, res) => {
  conn.query('SELECT aut_name FROM author;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    console.log(rows);
  });
});

app.get('/table', (req, res) => {
  conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast LEFT JOIN category ON book_mast.cate_id=category.cate_id LEFT JOIN author ON book_mast.aut_id=author.aut_id LEFT JOIN publisher ON book_mast.pub_id=publisher.pub_id;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    console.log(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});