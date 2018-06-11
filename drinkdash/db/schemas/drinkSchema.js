const Schema = require('mongoose').Schema

const drinkSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

module.exports = drinkSchema