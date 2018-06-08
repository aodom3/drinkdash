const Schema = require('mongoose').Schema
mongoose.connect('mongodb://localhost/drinks')

var db = mongoose.connection;

db.on('error', function(err) {
    console.log(err);
  });
  db.once('open', function() {
    console.log("database has been connected!");
  });
  
  db.close();
  
const drinkSchema = new Schema({
    name: "string",
    description: "string",
    img: "ut.png",
    price: ,
    qty: 
})

module.exports = drinkSchema