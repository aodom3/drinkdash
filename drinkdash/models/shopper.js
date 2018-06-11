const mongoose = require('mongoose')
const Schema = require('../db/scheemas.js')

const Shopper = mongoose.model('shopper', Schema.shopperSchema)

module.exports = Shopper