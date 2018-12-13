var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var restClient = require('node-rest-client-promise');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var testRouter = require('./routes/test');

var app = express();
//app.use(restClient);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/test', testRouter);

module.exports = app;
