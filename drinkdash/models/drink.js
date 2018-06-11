const mongoose = require('mongoose')
const Schema = require('../db/scheemas.js')

const Drink = mongoose.model('drink', Schema.drinkSchema)

module.exports = Drink