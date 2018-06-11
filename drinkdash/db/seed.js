const Drink = require('../db/schemas/drinkSchema');
const mongoose =require('mongoose');

mongoose.connect('localhost: 27017/drinking');

const drinks = [
    new Drink({
        imgPath:'https://drizly-products2.imgix.net/ci-hennessy-vs-cognac-54f25e684cec6aef.png?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'Hennesy',
        size: 750,
        price:39.99,
}),
    new Drink({
        imgPath:'https://drizly-products1.imgix.net/ci-ciroc-peach-vodka-0cc401e5a9061a2e.png?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'Ciroc',
        size:750,
        price:28.99,
}),
    new Drink({
        imgPath:'https://drizly-products0.imgix.net/ci-dusse-vsop-cognac-a9c7e304ba490578.png?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'D&#39Usse VSOP',
        size: 750,
        price:48.99,
}),
    new Drink({
        imgPath:'https://drizly-products0.imgix.net/ci-avion-silver-8fefb28a499cd3c5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20',
        label:'Avion Silver',
        size:750,
        price:39.99,
}),

];
const shoppers = []

for (let i = 0; i< drinks.length; i++){
    drinks[i].save();
}
mongoose.disconnect();
