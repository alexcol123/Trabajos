const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    minLength: 2,
    maxLength: 50,
  },

  lastName: {
    type: String,
    required: [true, 'Please provide last name'],
    minLength: 2,
    maxLength: 50,
  },

  country: {
    type: String,
    required: [true, 'Please provide country'],
    minLength: 2,
    maxLength: 50,
  },

  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide valid email',
    ],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 6,
  },
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, firstName: this.firstName },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return (isMatch = await bcrypt.compare(candidatePassword, this.password))
}

module.exports = mongoose.model('User', UserSchema)
