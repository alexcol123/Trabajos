const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

// REGISTER
const register = async (req, res) => {
  const { firstName, lastName, email, country, password } = req.body

  if (!firstName || !lastName || !email || !password || !country) {
    res.send('Please include , firstName, lastName, email, password')
  }

  const user = await User.create({ ...req.body })

  const token = user.createJWT()

  res.status(StatusCodes.CREATED).json({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      token,
    },
  })
}

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please include email and password')
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }

  // Compare password
  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token,
    },
  })
}

module.exports = {
  register,
  login,
}
