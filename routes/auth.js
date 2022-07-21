const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')

const { login, register, updateUser } = require('../controllers/auth')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(authenticateUser, updateUser)

module.exports = router
