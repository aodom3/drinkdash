var express = require('express');
var router = express.Router();
const Shopper = require('../models/Shopper')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', (req, res)=>{
  Shopper.find()
  .then((getAllShoppers)=>{
res.render('shopper/index',{getAllShoppers: getAllShoppers})
  })
})

module.exports = router;
