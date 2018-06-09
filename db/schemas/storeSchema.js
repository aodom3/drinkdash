const Schema = require('mongoose').Schema
const drinksSchema = require('./drinksSchema')

const storeSchema = new Schema({
    name: String,
    address: String,
    website: String,
    phoneNumber: String,
    drinks: [drinksSchema]
});

module.exports = storeSchema