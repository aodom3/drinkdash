const mongoose =require('mongoose');
const Drink = require('../models/drink.js');
// const Shopper = require('../models/shopper.js');

require('dotenv').config()

//Connect to Database

mongoose.connect('mongodb://localhost/drinkdash')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

//Remove old Drinks data
  Drink.remove()
    .then(()=>{
        //create new test Drink data
   const drink1 = new Drink({
        imgPath:'https://drizly-products2.imgix.net/ci-hennessy-vs-cognac-54f25e684cec6aef.png?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'Hennesy',
        size: 750,
        price:39.99,
}),
    const drink2 = new Drink({
        imgPath:'https://drizly-products1.imgix.net/ci-ciroc-peach-vodka-0cc401e5a9061a2e.png?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'Ciroc',
        size:750,
        price:28.99,
}),
    const drink3 = new Drink({
        imgPath:'https://drizly-products0.imgix.net/ci-dusse-vsop-cognac-a9c7e304ba490578.png?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'D&#39Usse VSOP',
        size: 750,
        price:48.99,
}),
    const drink4 = new Drink({
        imgPath:'https://drizly-products0.imgix.net/ci-avion-silver-8fefb28a499cd3c5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'Avion Silver',
        size:750,
        price:39.99,
})

const drinks = [drink1, drink2, drink3, drink4]

    // save test data
    return Drink.insertMany(drinks)
  })

  .then(() => {

    // close the database
    mongoose.connection.close()
  })
