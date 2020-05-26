const Post = require('../models/posts')

function create (postData) {
  return Post.create(postData)
}

function getAll () {
  return Post.find()
    .sort({ publication_date: -1 })
    .select({
      category: 1,
      title: 1,
      author: 1,
      description: 1,
      publication_date: 1,
      estimated_time: 1,
      image: 1,
      tag: 1
    })
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
