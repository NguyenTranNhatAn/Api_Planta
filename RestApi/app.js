var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Foodhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

var indexRouter = require('./routes/index');
var user = require('./routes/user');
var product = require('./routes/product');
var category = require('./routes/category');
var admin = require('./routes/admin');
var cart = require('./routes/cart')
var bill = require('./routes/bill')
var favorite= require('./routes/favorite')
var rate= require('./routes/rate')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/category', category)
app.use('/', indexRouter);
app.use('/user', user);
app.use('/product', product);
app.use('/admin', admin);
app.use('/cart', cart);
app.use('/bill', bill);
app.use('/favorite', favorite);
app.use('/rate', rate);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
