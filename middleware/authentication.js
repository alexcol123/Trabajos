const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication Invalid')
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
   

    // attach ther user to the job routes
    req.user = { userId: payload.userId, firstName: payload.firstName }
    next()
  } catch {
    throw new UnauthenticatedError('Authentication Invalid')
  }
}

module.exports = auth
