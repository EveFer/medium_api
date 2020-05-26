const express = require('express')

const users = require('../useCases/users')
const authMiddleware = require('../middlewares/auth')

const ROUTER = express.Router()

ROUTER.post('/signup', async (req, res) => {
  try {
    const userCreated = await users.signUp(req.body)
    res.json({
      success: true,
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      data: error.message
    })
  }
})

ROUTER.get('/', authMiddleware, async (req, res) => {
  try {
    const allUsers = await users.getAll()
    res.json({
      success: true,
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      data: error.message
    })
  }
})

ROUTER.get('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params
    const user = await users.getAUser(id)
    res.json({
      success: true,
      data: {
        user
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      data: error.message
    })
  }
})

ROUTER.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params
    await users.deleteById(id)
    res.json({
      success: true,
      message: 'User Deleted'
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      data: error.message
    })
  }
})

ROUTER.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params
    const userUpdated = await users.updateById(id, req.body)
    res.json({
      success: true,
      message: 'User Updated',
      data: {
        post: userUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      data: error.message
    })
  }
})

module.exports = ROUTER
