const Shopper = require('./models/Shopper')
const mongoose = require('mongoose')
    
// Connect to Database
mongoose.connect('mongodb://localhost/drinkdash')
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

 // Delete all users
    Shopper.remove({})
        .then(() => {
            const kofi = new Shopper({
                name: 'Kofi Siriboe',
                email: 'kofi@test.com',
                
            })
    
            return kofi.save()
    
        })
        .catch((error) => {
            console.log('Oh Crap, Its Not Working!!')
            console.log(error)
        }).then(() => {
            mongoose.connection.close()
       
        })