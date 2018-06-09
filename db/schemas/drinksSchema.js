const Schema = require('mongoose').Schema

const drinksSchema = new Schema({
    type: String,
    name: String,
    size: Number,
    price: Number,
    photo: String,
    stocked: Boolean
});

module.exports = drinksSchema