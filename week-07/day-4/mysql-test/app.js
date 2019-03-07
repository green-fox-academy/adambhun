"use strict";

const mysql = require('mysql');
const express = require("express");
const app = express();
const PORT = 3000;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database name'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);  
});