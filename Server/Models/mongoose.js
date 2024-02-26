import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/webChat').then(() => {

    console.log("Connection Established")

}).catch(err => {

    console.log(err)

})

