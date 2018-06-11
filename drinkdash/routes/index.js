const express = require('express');
const router = express.Router();
const Drink = require('../db/schemas/drinkSchema');
/* GET home page. */
router.get('/', function(req, res, next) {
  // let drinks = Drink.find();
  res.render('shopper/index', { title: 'DrinkDash' });
});
/*GET signup page. */
router.get('/shopper/signup', function(req, res, next) {
  // let drinks = Shopper.find();
  res.render('shopper/signup', { title: 'SignUp' });
});
module.exports = router;
