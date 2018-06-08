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

 // Delete all users, then add some fake ones
    User.remove({})
        .then(() => {
            const olee = new User({
                nickName: 'olee',
                email: 'olee@test.com',
                firstName: 'Okhyun',
                lastName: 'Lee',
                photoUrl: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/1ea/270/09d189f.jpg'
            })
    
            return olee.save()
    
        })
        .catch((error) => {
            console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
            console.log(error)
        }).then(() => {
            mongoose.connection.close()
            console.log(`
            Finished seeding database...
            
            Disconnected from MongoDB
          `)
        })