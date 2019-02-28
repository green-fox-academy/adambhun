const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  let payload = req.query;
  if (payload.name === undefined) {
    payload.name = 'guest';
  }
  res.render('home', payload);
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//When a user visits our /?name={name} route, greet them on their name. 
//for /?name=John route, render this: welcome back john
//When a user visits the base route (/) without a given name, render this page:  ....guest
//for /, render