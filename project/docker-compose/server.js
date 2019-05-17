'use strict';

const express = require('express');
const app = express();
const port = 9006;
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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

// function handleDisconnect() {

//   conn.connect(function(err) {
//       if(err) {
//           console.log('error when connecting to db:', err);
//           setTimeout(handleDisconnect, 2000);
//       }
//   });
//   conn.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') {
//           handleDisconnect();
//       }else{
//           throw err;
//       }
//   });
// }

// handleDisconnect();

setTimeout(() => {
  conn.connect((err) => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('DB is connected');
  });  
}, 35000);



//HOME
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/home.html'));
});

//LIST
app.get('/list', (req, res) => {
  conn.query(`SELECT * FROM tableone;`, (err, rows) => {
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
  conn.query(`INSERT INTO tableone (entries) VALUES ('${entry}');`, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(rows);
  });
});