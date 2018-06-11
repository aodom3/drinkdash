const express = require('express');
const router = express.Router();

/* GET login page. */
router.get('/shopper', function(req, res, next) {
  res.render('shopper/login', { title: 'Log-in' });
});

module.exports = router;