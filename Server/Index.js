require('./Models/mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const User = require('./Models/User')
const multer = require('multer')
const UserDP = require('./Models/UserDPs')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {

        cb(null, file.originalname);
    }
});

const upload = multer({ storage })

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));



app.post('/register', async (req, res) => {

    try {

        const { email, password, userName } = req.body
        const user = await User.create({ email: email, password: password, userName: userName })
        res.status(200).json({ _id: user._id, userName: user.userName })

    } catch (error) {
        console.log(err)
    }

})

app.post('/uploadProfile', upload.single('image'), async (req, res) => {

    try {

        const user = await User.findById(req.body.userID)
        const path = req.file.path.replace(/\//g, "\\")
        const DP = await UserDP.create({
            filename: req.file.filename,
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            path: path
        })
        user.displayPicture = DP._id
        user.save()
        const userToSend = user.toObject();
        delete userToSend.password;

        res.status(200).json(userToSend)


    } catch (error) {
        console.log(error)
    }

})

app.post('/addFriend', async (req, res) => {

    try {

        const { adder, added } = req.body

        const Adder = await User.findById(adder)
        const Added = await User.findById(added)

        Adder.friends.push({ _id: Added._id, displayPicture: Added.displayPicture, userName: Added.userName })
        Added.pendingRequests.push(adder)
        Adder.save()
        Added.save()

        res.status(200).json(Adder)


    } catch (error) {

        console.log(error)

    }

})

app.get('/getImage/:id', async (req, res) => {

    try {

        const DP = await UserDP.findById(req.params.id)
        res.status(200).send(DP)


    } catch (error) {
        console.log(error)
    }

})

app.get('/getAllUsers', async (req, res) => {

    try {

        const users = await User.find({}, 'userName _id displayPicture')
        res.status(200).json(users)

    } catch (error) {
        console.log(error)
    }

})

app.listen(3001, () => { console.log("Listening on 3001") })
