const Drink = require('../models/drink');
const mongoose =require('mongoose');

mongoose.connect('localhost: 27017/drinking');

const drinks = [
    new Drink({
        image:
        label:'Hennesy'
        price:38.99
}),
new Drink({
    image:
    label:'Ciroc'
    size:
    price:38.99
}),
new Drink({
    image:
    label:'D&#39Usse'
    size:
    price:38.99
}),
new Drink({
    image:
    label:'Avion'
    size:
    price:38.99
}),
new Drink({
    image:
    label:'JackDaniels'
    size:
    price:38.99
}),
new Drink({
    image:
    label:'Bacardi'
    size:
    price:38.99
}),
];

for (let i = 0; i< drinks.length; i++){
    drinks[i].save();
}

