const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema ({
    image:{type: String, required: true},
    label:{type: String, required: true},
    price:{type: Number, required: true},
})

module.export = mongoose.model('drink', schema);