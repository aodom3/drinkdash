const Schema = require('mongoose').Schema

const cartSchema = new Schema({
    Drink: [drinkSchema],
}) 


module.exports = cartSchema