const mongoose = require("mongoose");

const UserDPSchema = new mongoose.Schema({
    filename: String,
    originalname: String,
    mimetype: String,
    size: Number,
    path: String
})

const UserDP = mongoose.model('UserDP', UserDPSchema)
module.exports = UserDP