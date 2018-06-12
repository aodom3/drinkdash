const express = require('express')
const router = express.Router()
const drink = require('../models/drink')

/* GET drink info. */

router.get('/', (req, res, next) => {

  // Find all drinks
  drink.find()
    .then((drink) => {

      res.render('drink/index', { drink: drink })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('drink/new')
})


router.post('/', (req, res) => {
  const newDrink = req.body
  drink.create(newDrink)
    .then(() => {
      res.redirect('/')
    })
})

router.get('/', (req,res) =>{
  console.log("inside / ")
  drink.find().then(drink =>{
      res.render('drink/index', { drink:
        drink })
  })
})

// SHOW Route

router.get('/:id', (req, res) => {
  drink.findById(req.params.id)
    .then((drink) => {
      res.render('drink/show', { drink })
    })
})

// CREATE Route

router.post('/', (req, res) => {
  const newDrink = req.body
  drink
    .create(newDrink)
    .then(() => {
      res.redirect('/')
    })
})

// EDIT Route

router.get('/:id/edit', (req, res) => {
  drink
    .findById(req.params.id)
    .then((showDrink) => {
      res.render('drink/edit', { showDrink })
    })
})

// UPDATE Route

router.put('/:id', (req, res) => {
  drink.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/drink/${req.params.id}`)
  })
})

// DELETE Route

router.delete('/:id', (req, res) => {
  drink.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/')
    })
})

module.exports = router
