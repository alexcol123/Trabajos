const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

// REGISTER
const register = async (req, res) => {
  // const { name, email, password } = req.body

  // if (!name || !email || !password) {
  //   res.send('Please include , name, email, password')
  // }

  const user = await User.create({ ...req.body })

  const token = user.createJWT()

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please include email and password')
  }

  const user = await User.findOne({ email })

  if (!user) {
    res.send('That User does not exist')
  }

  // Compare password
  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    res.send('Password does not match ')
  }

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

module.exports = {
  register,
  login,
}
