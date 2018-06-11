const express = require('express')
const router = express.Router()
const Drink = require('../models/Drink')

/* GET drink info. */
// localhost/shopper
router.get('/', (req, res, next) => {

  // Find all Drinks
  Drink
    .find()
    .then((listOfDrinks) => {

      // Once you have all shoppers, then render out index page shopper is all
      // pieces of data that match the Drink Model
      res.render('drinks/index', { listOfDrinks: listOfDrinks })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('drink/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newDrink = req.body
  Drink
    .create(newDrink)
    .then(() => {
      res.redirect('/drink')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Drink
    .findById(req.params.id)
    .then((listofDrink) => {
      res.render('drink/show', { listofDrink })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Drink
    .findById(req.params.id)
    .then((Ciroc) => {
      res.render('shopper/edit', { listofDrink: Ciroc })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Drink.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/drink/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Drink.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/drink')
    })
})

module.exports = router












// const express = require('express');
// const router = express.Router();

// /* GET login page. */
// router.get('/shopper', function(req, res, next) {
//   res.render('shopper/signup', { title: 'Log-in' });
// });

// module.exports = router;