require('./Models/mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const User = require('./Models/User')
const multer = require('multer')
const upload = multer({ dest: './uploads' })
const fs = require('fs')

app.use(cors())
app.use(express.json())

app.post('/register', async (req, res) => {

    try {

        const { email, password, userName } = req.body
        const user = await User.create({ email: email, password: password, userName: userName })
        res.status(200).json(user)

    } catch (error) {
        console.log(err)
    }

})

app.post('/uploadProfile', upload.single('image'), async (req, res) => {

    try {

        const user = await User.findById(req.body.userID)
        const fileData = fs.readFileSync(req.file.path)
        const baseString = fileData.toString('base64')
        user.displayPicture = baseString
        user.save()
        console.log(user)
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
    }

})

app.listen(3001, () => { console.log("Listening on 3001") })
