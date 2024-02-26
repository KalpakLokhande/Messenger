import './Models/mongoose.js'
import express from 'express'
const app = express()
import cors from 'cors'
import User from './Models/User.js'
import multer from 'multer'
import UserDP from './Models/UserDPs.js'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {

        cb(null, file.originalname);
    }
});

const upload = multer({ storage })

import { Server } from 'socket.io'
import http from 'http'
import { type } from 'os'
const server = http.createServer(app)
const io = new Server(server)

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));



app.post('/register', async (req, res) => {

    try {

        const { email, password, userName } = req.body
        const user = await User.create({ email: email, password: password, userName: userName })
        const userToSend = user.toObject();
        delete userToSend.password;
        res.status(200).json(userToSend)

    } catch (error) {
        console.log(err)
    }

})

app.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await User.find({ email: email })
        console.log(user[0].password, password)
        if (user) {

            if (user[0].password === password) {

                const userToSend = user[0].toObject();
                delete userToSend.password
                res.status(200).json(userToSend)

            } else {

                res.status(400).send('Check Your Password')

            }

        } else {

            res.status(404).send("No User Found")

        }

    } catch (error) {

        console.log(error)

    }

})

app.put('/removeFriend', async (req, res) => {

    try {

        const remover = await User.findById(req.body.remover)
        remover.friends = remover.friends.filter(friend => friend._id.toString() !== req.body.removed)
        await remover.save()
        res.status(200).json(remover)

    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong..")
    }

})

app.post('/uploadProfile', upload.single('image'), async (req, res) => {

    try {

        const user = await User.findById(req.body.userID)
        const path = req.file.path.replace(/\//g, "\\")

        user.displayPicture = path
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
        await Adder.save()
        await Added.save()

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
