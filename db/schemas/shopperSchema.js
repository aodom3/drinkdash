const Schema = require('mongoose').Schema
const drinksSchema = require('./drinksSchema')

const shopperSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    drinks: [ drinksSchema ],
    payment: String,    
});

module.exports = shopperSchema
