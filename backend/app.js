var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var  bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var app = express();






// view engine setup

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(cookieParser());

app.use("/image",express.static(path.join(__dirname,"data")))
app.use('',  indexRouter);




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.render('error');
  
});

module.exports = app;
