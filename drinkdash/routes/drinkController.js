const express = require('express')
const router = express.Router()
const Shopper = require('../models/Shopper')

/* GET drink info. */
// localhost/shopper
router.get('/', (req, res, next) => {

  // Find all Shoppers
  Drink
    .find()
    .then((listOfDrinks) => {

      // Once you have all drinks, then render out index page drink is all
      // pieces of data that match the Drink Model
      res.render('drink/index', { listOfDrinks: listOfDrinks })
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
      res.render('drink/show', { listofDrinks })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Drink
    .findById(req.params.id)
    .then((Ciroc) => {
      res.render('drink/edit', { Ciroc})
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Drink.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/shopper/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Shopper.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/drink')
    })
})

module.exports = router
