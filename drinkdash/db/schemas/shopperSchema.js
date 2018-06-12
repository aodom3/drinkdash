// const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const shopperSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    city: String,     
    state: String,
    zip: Number,
    })


module.exports = shopperSchema