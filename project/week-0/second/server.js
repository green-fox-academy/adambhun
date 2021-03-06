'use strict';

const express = require('express');
const app = express();
const port = 9005;
const path = require('path');
app.use('/frontend', express.static(__dirname + '/frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Listening @ port ${port}`);
});

require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME
});

conn.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('DB is connected');
});


//HOME
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/home.html'));
});

//LIST
app.get('/list', (req, res) => {
  conn.query(`SELECT * FROM table1;`, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    }
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(rows);
  });
});

//SAVE
app.post('/save', (req, res) => {
  let entry = req.body.entry;
  conn.query(`INSERT INTO table1 (entries) VALUES ('${entry}');`, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(rows);
  });
});