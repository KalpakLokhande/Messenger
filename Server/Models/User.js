import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    userName: String,
    displayPicture: {
        type: Object
    },
    friends: Array,
    favourites: Array,
    pendingRequests: Array
})

const user = mongoose.model('User', userSchema)
export default user