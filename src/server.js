const express = require('express')
const path = require('path')
const cors = require('cors')

const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

// const corsOptions = {
//   origin: 'http://127.0.0.1:5501',
//   methods: ['GET', 'PUT', 'POST', 'PUT', 'PATCH', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }

// app.set('view engine', 'html')

// middleware
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.use('/posts', postRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

// static files
app.use(express.static(path.join(__dirname, 'views')))

module.exports = app
