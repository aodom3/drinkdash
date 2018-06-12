const mongoose = require('mongoose')
const shopperSchema = require('../db/schemas/shopperSchema')

const shopper = mongoose.model('shopper', shopperSchema)

module.exports = shopper