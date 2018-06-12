const express = require('express');
const router = express.Router();
const schema = require('../db/schemas/Schema');
const Drink = schema.drinkSchema
const Cart = schema.cartSchema
const Shopper = schema.shopperSchema

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DrinkDash' });
});
/*GET signup page. */
router.get('/shopper/signup', function(req, res, next) {
  res.render('shopper/signup', { title: 'SignUp' });
});
module.exports = router;
