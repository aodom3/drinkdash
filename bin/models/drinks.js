//requirements: require mongoose

const mongoose = require('mongoose')

//created drink schema
const drinkSchema = require('../db/schemas/drinkSchema')

const Drink = mongoose.model('drink', drinkSchema)

//exported drink with module.exports()
 
module.exports() = Drink