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
  


const shopperSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    drink: [ drinkSchema ],
    payment: String,    
});




const DrinkModel = mongoose.model("Drink", drinkSchema);
const ShopperModel = mongoose.model("Shopper", shopperSchema);


module.exports = shopperSchema
