const mongoose = require('mongoose')
const drinkSchema = require('../db/schemas/drinkSchema')

const drink = mongoose.model('drink', drinkSchema)

module.exports = drink