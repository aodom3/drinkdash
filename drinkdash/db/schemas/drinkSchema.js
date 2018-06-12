const Schema = require('mongoose').Schema

const drinkSchema = new Schema({
    label: String,
    img: String,
    size: Number,
    price: Number,
    
})

module.exports = drinkSchema