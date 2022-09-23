const express = require('express');

const db = require('./data/data');
const mainRoutes = require('./routes/main-routes');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(mainRoutes);

db.connectToDatabase()
  .then( function () {
    app.listen(3001);
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
  });