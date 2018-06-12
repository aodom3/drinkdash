const express = require('express')
const router = express.Router()
const Shopper = require('../models/Shopper')

/* GET drink info. */
// localhost/shopper
router.get('/', (req, res, next) => {

  // Find all Shoppers
  shopper.find()
    .then((shopper) => {

      res.render('drink/index', { shopper: shopper })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('shopper/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newShopper = req.body
  Shopper
    .create(newShopper)
    .then(() => {
      res.redirect('/shopper')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Shopper
    .findById(req.params.id)
    .then((shopper) => {
      res.render('shopper/show', { shopper })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Shopper
    .findById(req.params.id)
    .then((shopper) => {
      res.render('shopper/edit', { shopper })
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
