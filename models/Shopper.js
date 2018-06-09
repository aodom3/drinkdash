const mongoose = require('mongoose')
const Schema = require('../schema')

const Shopper = mongoose.model('shopper', shopperSchema)

module.exports = Shopper