require('./Models/mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const User = require('./Models/User')

app.use(cors())
app.use(express.json())

console.log(User)

app.listen(3001, () => { console.log("Listening on 3001") })
