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
  
const DrinkSchema = new Schema({
    name: "string",
    type: "string",
    size: "number",
    price: "number",
    picture: "string",
    stocked: "boolean"
});

const ShopperSchema = new Schema({
    name: "string",
    email: "string",
    age: "number",
    drink: [],
    payment: "string",    
});

const StoreSchema = new Schema({
    name: "string",
    address: "string",
    website: "string",
    photoUrl: "string",
});


const DrinkModel = mongoose.model("Drink", drinkSchema);
const ShopperModel = mongoose.model("Shopper", shopperSchema);


module.exports = {
    ShopperSchema,
    DrinkSchema,
    StoreSchema,
}