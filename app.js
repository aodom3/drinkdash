require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose'); 
const methodOverride = require('method-override')


mongoose.connect(process.env.MONGODB_URI); 

const app = express();

// Connect to Database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('   ===============================  ')
    console.log('   CONNECTION TO MONGO ESTABLISHED  ')
    console.log('   ===============================  ')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cartController = require('./controllers/cartController');
app.use('/cart', cartController)
const drinkController = require('./controllers/drinkController');
app.use('/', drinkController)
const shopperController = require('./controllers/shopperController');
// app.use('/', router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
