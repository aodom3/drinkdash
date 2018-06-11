const mongoose = require('mongoose')
const drinkSchema = require('../db/schemas/drinkSchema')

const Drink = mongoose.model('drink', drinkSchema)

module.exports = Drink