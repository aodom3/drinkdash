const mongoose = require('mongoose')
const drinksSchema = require('../db/schemas/drinksSchema')

const Drinks = mongoose.model('drinks', drinksSchema)

module.exports = Drinks