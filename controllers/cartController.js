const express = require('express')
const router = express.Router()
const Cart = require('../models/cart')


/* GET cart info. */

router.get('/', (req, res, next) => {

  // Find the cart
  cart.find()
    .then((cart) => {

      res.render('cart/index', { cart: cart })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('cart/new')
})
router.post('/', (req, res) => {
  const newDrink = req.body
  cart.create(newCart)
    .then(() => {
      res.redirect('/')
    })
})

router.get('/', (req,res) =>{
  console.log("inside / ")
  cart.find().then(cart =>{
      res.render('cart/index', { cart:
        cart })
  })
})

// SHOW Route

router.get('/:id', (req, res) => {
  cart.findById(req.params.id)
    .then((cart) => {
      res.render('cart/show', { cart })
    })
})

// CREATE Route

router.post('/', (req, res) => {
  const newCart = req.body
  cart
    .create(newCart)
    .then(() => {
      res.redirect('/')
    })
})

// EDIT Route

router.get('/:id/edit', (req, res) => {
  cart
    .findById(req.params.id)
    .then((showCart) => {
      res.render('cart/edit', { showDrink })
    })
})

// UPDATE Route

router.put('/:id', (req, res) => {
  cart.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/cart/${req.params.id}`)
  })
})

// DELETE Route

router.delete('/:id', (req, res) => {
  cart.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/')
    })
})

module.exports = router
