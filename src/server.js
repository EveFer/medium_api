const express = require('express')
const cors = require('cors')

const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

// var corsOptions = {
//   origin: '*',
//   methods: ['GET', 'PUT', 'POST', 'PUT', 'PATCH', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }

// middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/posts', postRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

module.exports = app
