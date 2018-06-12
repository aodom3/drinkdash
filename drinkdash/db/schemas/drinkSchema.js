const Schema = require('mongoose').Schema

const drinkSchema = new Schema({
    label: String,
    img: String,
    size: Number,
    price: Number,
    // img: {
    //     type: String,
    
    // },
    // label: {
    //     type: String,
    //     required: true
    // },
    // size: {
    //     type: Number,
    //     required: true
    // },
    // price: {
    //     type: Number,
    //     required: true
    // },
})

module.exports = drinkSchema