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
    minlength: 10,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  publication_date: {
    type: Date,
    required: true
  },
  estimated_time: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  tag: {
    type: String,
    required: true,
    trim: true
  },
  imgDetail: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Post', schemaPost)
