'use strict';

var cors = require("cors");

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require("body-parser");

var _require = require('./backend/middleware/errorMiddleware'),
    errorHandler = _require.errorHandler;

require('dotenv').config();

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors()); //use json in app

app.use(express.json()); //rref to md atlas uri

var uri = process.env.ATLAS_URI; //create db connection

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB connection established successfully");
}); // set the view engine to ejs

app.set('view engine', 'ejs'); // routes
//app.use('/', require('./routes/profile')());

app.use('/users', require('./routes/users'));
app.use('/comments', require('./routes/comments')); // app.use('/', require('./routes/comments'));
// app.use('/like/:id', require('./routes/comments'));
// start server

var server = app.listen(port);
console.log('Express started. Listening on %s', port);