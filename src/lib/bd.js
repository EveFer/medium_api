const mongoose = require('mongoose')

function connect () {
  return mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = { connect }
