'use strict';

const express = require('express');
const app = express();
const port = 9005;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Listening @ port ${port}`);
});


//HOME
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});