const mongoose = require('mongoose')
const storeSchema = require('../db/')


const Store = mongoose.model('store', homeworkSchema)


module.exports = Store