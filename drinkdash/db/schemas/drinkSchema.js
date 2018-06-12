const Schema = require('mongoose').Schema

const drinkSchema = new Schema({
    img: {
        type: String,
    
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