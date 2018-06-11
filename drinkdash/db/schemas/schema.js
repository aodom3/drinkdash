const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const shopperSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
});

module.export ={
    drinkSchema,
    shopperSchema,
}