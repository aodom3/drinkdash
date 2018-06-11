const express = require('express');
const router = express.Router();
const Drink = require('../models/drink');
/* GET home page. */
router.get('/', function(req, res, next) {
  let drinks = Drink.find();
  res.render('store/index', { title: 'DrinkDash' });
});

module.exports = router;
