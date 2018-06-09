const drinksSchema = new Schema({
    name: String,
    type: String,
    size: Number,
    price: Number,
    picture: String,
    stocked: Boolean
});



module.exports = drinksSchema