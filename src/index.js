const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// 
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});