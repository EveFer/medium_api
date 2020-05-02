const Post = require('../models/posts')

function create (postData) {
  return Post.create(postData)
}

function getAll () {
  return Post.find().sort('publication_date')
}

function getAPost (id) {
  return Post.findById(id)
}

function deleteById (id) {
  return Post.findByIdAndRemove(id)
}

function updateById (id, newPostData) {
  return Post.findByIdAndUpdate(id, newPostData, { new: true })
}

module.exports = {
  create,
  getAll,
  getAPost,
  deleteById,
  updateById
}
