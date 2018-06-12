const express = require('express')
const router = express.Router()
const drink = require('../models/drink')

/* GET drink info. */
// Create a GET index route "/" that sends all drinks to index.hbs

router.get('/', (req, res, next) => {

  // Find all drinks
  drink.find()
    .then((drink) => {

      // Once you have all drinks, then render out index page drink is all
      // pieces of data that match the Drink Model
      res.render('drink/index', { drink: drink })
    })
    .catch((err) => res.send(err))

})

// NEW Route
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (req, res) => {
  res.render('drink/new')
})

router.get('/', (req,res) =>{
  console.log("inside / ")
  drink.find().then(drink =>{
      res.render('drink/index', {
          drink:drink
      })
  })
})

// SHOW Route
// Create a GET show route "/:id" that renders the drink's show page
router.get('/:id', (req, res) => {
  drink.findById(req.params.id)
    .then((drink) => {
      res.render('drink/show', { drink })
    })
})

// CREATE Route
// Create a POST index route "/" that creates a new drink
// and upon success redirects back to the index page "/"
router.post('/', (req, res) => {
  const newDrink = req.body
  Drink
    .create(newDrink)
    .then(() => {
      res.redirect('/')
    })
})

// EDIT Route
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that drink's data to it
router.get('/:id/edit', (req, res) => {
  drink
    .findById(req.params.id)
    .then((drink) => {
      res.render('drink/edit', { drink })
    })
})

// UPDATE Route
//Create a PUT update route "/:id" that updates the drink and
// redirects back to the SH-0[p.OW PAGE (not index)
router.put('/:id', (req, res) => {
  drink.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/${req.params.id}`)
  })
})

// DELETE Route
// Create a DELETE delete route "/:id" that deletes the drink and
// redirects back to index page "/"
router.delete('/:id', (req, res) => {
  drink.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/')
    })
})
// EXPORTS
//======================
// export router with module.exports
module.exports = router
