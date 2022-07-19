const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.send('Please include , name, email, password')
  }

  const user = await User.create({ ...req.body })

  const token = user.createJWT()

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  res.send('logg  a nigga in ')
}

module.exports = {
  register,
  login,
}
