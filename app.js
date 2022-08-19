'use strict';

const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const {errorHandler} = require('./backend/middleware/errorMiddleware');

require('dotenv').config();

const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//use json in app
app.use(express.json());
//rref to md atlas uri
const uri = process.env.ATLAS_URI;
//create db connection
mongoose.connect(uri, {useNewUrlParser : true,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log( "MongoDB connection established successfully")});


// set the view engine to ejs
app.set('view engine', 'ejs');

// routes

//app.use('/', require('./routes/profile')());
app.use('/users', require('./routes/users'));
app.use('/comments', require('./routes/comments'));
// app.use('/', require('./routes/comments'));
// app.use('/like/:id', require('./routes/comments'));



// start server
const server = app.listen(port);
console.log('Express started. Listening on %s', port);
