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
    // console.log(rows);
  });
});

// app.post('/newtask', (req, res) => {
//   let SQL = `INSERT INTO tasks (title, done) VALUES
//   ('${req.body.title}', ${req.body.done});`;

//   conn.query(SQL, (err, rows) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send();
//         return;
//       }
//     SQL = `SELECT * FROM tasks WHERE id=${rows.insertId};`;

//       conn.query(SQL, (err, rows) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send();
//           return;
//         };
//         res.send(rows);
//       })
//     })
// });

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});