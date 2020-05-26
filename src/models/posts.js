const mongoose = require('mongoose')

const schemaPost = new mongoose.Schema({
  category: {
    type: String,
    require: true,
    enum: ['Diseño', 'Medicina', 'Tecnología', 'Lectura', 'Educación', 'Salud', 'Development']
  },
  title: {
    type: String,
    required: true,
    minlength: 10
  },
  subtitle: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 20
  },
  publication_date: {
    type: Date,
    required: true
  },
  estimated_time: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  imgDetail: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', schemaPost)
