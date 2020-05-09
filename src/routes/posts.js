const express = require('express')

const posts = require('../useCases/posts')
const errors = require('../lib/errorHandling')
const authMiddleware = require('../middlewares/auth')

const ROUTER = express.Router()

ROUTER.use(authMiddleware)

ROUTER.get('/', async (req, res) => {
  try {
    const allPosts = await posts.getAll()
    res.json({
      success: true,
      data: {
        posts: allPosts
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      errors: error.message
    })
  }
})

ROUTER.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await posts.getAPost(id)
    res.json({
      success: true,
      data: {
        post
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      errors: error.message
    })
  }
})

ROUTER.post('/', async (req, res) => {
  try {
    const postCreated = await posts.create(req.body)
    res.json({
      success: true,
      data: {
        post: postCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      errors: errors.errorsHandling(error)
    })
  }
})

ROUTER.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await posts.deleteById(id)
    res.json({
      success: true,
      message: 'Post Deleted'
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

ROUTER.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const postUpdated = await posts.updateById(id, req.body)
    res.json({
      success: true,
      message: 'Post Updated',
      data: {
        post: postUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = ROUTER
