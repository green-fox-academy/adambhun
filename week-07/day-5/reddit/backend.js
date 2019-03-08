'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');
app.use("/public", express.static("public"));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
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
//HOME
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

//POST SOMETHING
app.post('/posts', (req, res) => {  
  let title = req.query.title;
  let url = req.query.url;
  let id = req.query.id;
  console.log(title, url, id);
  
  conn.query(`INSERT INTO posts (title, url, id) VALUES ('${title}', '${url}', '${id}');`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    res.status(200).send();
    // console.log(rows);
  });
});

//SHOW POSTS
app.get('/posts', (req, res) => {
  conn.query('SELECT title, url, posted_at, score, vote FROM posts LEFT JOIN relations ON posts.id=relations.p_id LEFT JOIN users ON users.id=relations.u_id;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    res.status(200).send();
    console.log(rows);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});