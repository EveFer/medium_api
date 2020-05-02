const mongoose = require('mongoose')

function connect () {
  return mongoose.connect('mongodb+srv://devfernanda:kodemia123@tester-fqndx.mongodb.net/medium?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = { connect }
