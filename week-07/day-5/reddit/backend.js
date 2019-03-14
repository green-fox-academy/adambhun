'use strict';
//FIXME: error handling
//FIXME: add users
//FIXME: session
//FIXME: breaks

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');
let accepts = require('accepts');
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
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
  if (req.accepts('application/json') === false) {
    console.log('wrong request header');
    if (req.is('application/json') !== 'application/json') {
      console.log('header: wrong content type');
    }
  }
  let title = req.body.title;
  let url = req.body.url;
  let owner = req.body.owner;
  let owner_id = req.body.owner_id;
  conn.query(`INSERT INTO posts (title, url, owner, owner_id) VALUES ('${title}', '${url}', '${owner}', '${owner_id}');`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.set('Content-type', 'application/json');
    res.status(200).send(rows);
    console.log(rows);
  });
});

//SHOW POSTS
app.get('/posts', (req, res) => {
  if (req.accepts('application/json') === false) {
    console.log('wrong request header');
    if (req.is('application/json') !== 'application/json') {
      console.log('header: wrong content type');
    }
  }
  conn.query('SELECT title, url, posted_at, score, owner FROM posts;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.set('Content-type', 'application/json');
    res.status(200).send(rows);
    // console.log(rows);
  });
});

//UPVOTE
app.put('/posts/:id/upvote', (req, res) => {
  if (req.accepts('application/json') === false) {
    console.log('wrong request header');
    if (req.is('application/json') !== 'application/json') {
      console.log('header: wrong content type');
    }
  }

  const pId = req.params.id;
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${pId};`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.set('Content-type', 'application/json');
    res.status(200).send(rows);
    // console.log(rows);
  });
});

//DOWNVOTE
app.put('/posts/:id/downvote', (req, res) => {
  if (req.accepts('application/json') === false) {
    console.log('wrong request header');
    if (req.is('application/json') !== 'application/json') {
      console.log('header: wrong content type');
    }
  }
  const pId = req.params.id;
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${pId};`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.set('Content-type', 'application/json');
    res.status(200).send(rows);
    // console.log(rows);
  });
});

//DELETE
app.delete('/posts/:id', (req, res) => {
  if (req.accepts('application/json') === false) {
    console.log('wrong request header');
    if (req.is('application/json') !== 'application/json') {
      console.log('header: wrong content type');
    }
  }
  const pId = req.params.id;
  conn.query(`DELETE FROM posts WHERE id='${pId}';`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.set('Content-type', 'application/json');
    res.status(200).send(rows);
    // console.log(rows);
  });
});

//MODIFY POST
app.delete('/posts/:id', (req, res) => {
  if (req.accepts('application/json') === false) {
    console.log('wrong request header');
    if (req.is('application/json') !== 'application/json') {
      console.log('header: wrong content type');
    }
  }

  const id = req.params.id;
  const title = req.body.title;
  const url = req.body.url;
  conn.query(`UPDATE posts SET title = '${title}', url = '${url}' WHERE id='${id}';`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.set('Content-type', 'application/json');
    res.status(200).send(rows);
    // console.log(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});