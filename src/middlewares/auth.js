const jwt = require('../lib/jwt')

function auth (req, res, next) {
  const { authorization: token } = req.headers
  try {
    jwt.verify(token)
    next()
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth
