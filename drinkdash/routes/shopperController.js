const express = require('express')
const router = express.Router()
const Shopper = require('../models/Shopper')

/* GET drink info. */
// localhost/shopper
router.get('/', (req, res, next) => {

  // Find all Shoppers
  Shopper
    .find()
    .then((listOfShoppers) => {

      // Once you have all drinks, then render out index page drink is all
      // pieces of data that match the Shopper Model
      res.render('shopper/index', { listOfShoppers: listOfShoppers })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('shopper/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newDrink = req.body
  Shopper
    .create(newDrink)
    .then(() => {
      res.redirect('/shopper')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Shopper
    .findById(req.params.id)
    .then((listofDrink) => {
      res.render('shopper/show', { listofShopper })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Shopper
    .findById(req.params.id)
    .then((Ciroc) => {
      res.render('shopper/edit', { listofShopper: email })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Shopper.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/shopper/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Shopper.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/shopper')
    })
})

module.exports = router
