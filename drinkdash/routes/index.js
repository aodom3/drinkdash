const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('store/index', { title: 'Look Momma We Made It' });
});

module.exports = router;
