const User = require('../models/users')

const jwt = require('../lib/jwt')

const bcrypt = require('bcrypt')

async function signUp (userData) {
  const { email, password } = userData
  const user = await User.findOne({ email })
  if (user) throw new Error('Email Exists')
  if (password < 8) throw new Error('Password must be 7 letters')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...userData, password: hash })
}

async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid credentials')
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('Invalid Credentials')

  return jwt.sign({ id: user._id }) // retorna un token
}

function getAll () {
  return User.find()
}

function getAUser (id) {
  return User.findById(id)
}

function deleteById (id) {
  return User.findByIdAndRemove(id)
}

function updateById (id, newUserData) {
  return User.findByIdAndUpdate(id, newUserData, { new: true })
}

module.exports = {
  signUp,
  getAll,
  getAUser,
  deleteById,
  updateById,
  login
}
