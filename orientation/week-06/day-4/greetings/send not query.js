const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/:name', (req, res) => {
  res.send(`<h1>Hello, ${req.params.name}!</h1>`);
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//When a user visits our /?name={name} route, greet them on their name. 
//Create a node web server to render templates