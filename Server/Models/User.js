const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    userName:String,
    displayPicture:String,
    friends:Array,
    favourites:Array,
    pendingRequests:Array
})

const user = mongoose.model('User',userSchema)
module.exports = user