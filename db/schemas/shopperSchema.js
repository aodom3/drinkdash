const Schema = require('mongoose').Schema
mongoose.connect('mongodb://localhost/shopper')

var db = mongoose.connection;

db.on('error', function(err) {
    console.log(err);
  });
  db.once('open', function() {
    console.log("database has been connected!");
  });
  
  db.close();
  
const ShopperSchema = new Schema({
    name: "string",
    email: "string",
    age: "number",
    drink: [],
    payment: "string",
    
});

const DrinkSchema = new Schema({
    name: "string",
    type: "string",
    size: "number",
    price: "number,
    picture: "string",
    stocked: "boolean"

    
});

const ShopperModel = mongoose.model("Shopper", shopperSchema);
const DrinkModel = mongoose.model("Drink", drinkSchema);

module.exports = drinkSchema