const mongoose = require('mongoose')
const Drinks = require('../models/Drinks')


// Connect to Database
mongoose.connect('mongodb://localhost/drinkdash')
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })




Drinks.remove()
.then(()=>{


// create new test Drinks data
const vodka = new vodka({
    title: 'vodka',
    description: 'pirates',
    subject: 'express',
    createdBy: 'bob',
    comments: [comment1, comment2]
})
const brandy = new brandy({
    title: 'Pirates update/dleete',
    description: 'more pirates',
    subject: 'express',
    createdBy: 'joof',
    comments: [comment1, comment2]
})
const homework3 = new Homework({
    title: 'Pizza Express',
    description: 'PIZZA',
    subject: 'React',
    createdBy: 'sal',
    comments: [comment1, comment2]
})
const homework4 = new Homework({
    title: 'final project',
    description: 'everything',
    subject: 'rails',
    createdBy: 'bryan',
    comments: [comment1, comment2]
})

const homeworks = [homework1, homework2, homework3, homework4]

// save test data
return Drinks.insertMany(drinks)



})
.then(() => {

    // close the database
    mongoose.connection.close()
})
