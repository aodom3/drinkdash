const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopperSchema = new Schema ({
    name:{type: String, required: true},
    email:{type: String, required: true},
    price:{type: Number, required: true},
})

module.export = mongoose.model('Shopper', shopperSchema);