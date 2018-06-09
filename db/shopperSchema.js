const Schema = require('mongoose').Schema

// mongoose.connect('mongodb://localhost/shopper')

// const db = mongoose.connection;

// db.on('error', function(err) {
//     console.log(err);
//   });
//   db.once('open', function() {
//     console.log("database has been connected!");
//   });
  
//   db.close();
  
const drinkSchema = new Schema({
    name: String,
    type: String,
    size: Number,
    price: Number,
    picture: String,
    stocked: Boolean
});

const shopperSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    drink: [ drinkSchema ],
    payment: String,    
});

const storeSchema = new Schema({
    name: String,
    address: String,
    website: String,
    photoUrl: String,
});


const DrinkModel = mongoose.model("Drink", drinkSchema);
const ShopperModel = mongoose.model("Shopper", shopperSchema);


module.exports = {
    shopperSchema,
    drinkSchema,
    storeSchema,
}