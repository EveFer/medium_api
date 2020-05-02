const express = require('express')

const users = require('../useCases/users')

const ROUTER = express.Router()

ROUTER.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const token = await users.login(email, password)
    res.json({
      success: true,
      data: {
        token
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
