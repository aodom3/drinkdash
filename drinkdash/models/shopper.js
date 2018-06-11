const mongoose = require('mongoose')
const shopperSchema = require('../db/schemas/shopperSchema')

const Shopper = mongoose.model('shopper', shopperSchema)

module.exports = Shopper