const Schema = require('mongoose').Schema

const drinkSchema = new Schema({
    label: String,
    img: String,
    size: Number,
    price: Number,
    
})

const cartSchema = new Schema({
    Drink: [drinkSchema],
}) 


module.exports = cartSchema