const mongoose = require('mongoose')
const cartSchema = require('../db/schemas/cartSchema')

const cart = mongoose.model('cart', cartSchema)

module.exports = cart