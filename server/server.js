const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const route = require('./routes/messageRoute')

// Middleware on express
app.use(cors())
app.use(bodyParser.json())

// Connect to database
const db = require('./config').MONGODB_URL
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Success to connect mongoDB Atlas'))
    .catch(err => console.log(err))

// send static document directly (for test)
app.use('/media', express.static(__dirname + '/media'))

// route
app.use('/api/message', route)

const port = process.env.port || 3000
app.listen(port, () => console.log(`Server starts on port ${port}`)) // template literals
