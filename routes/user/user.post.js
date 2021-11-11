const express = require('express')
const router = express.Router()
const { signupController } = require('../../controllers/user/user.post')
const jwt = require('jsonwebtoken')

router.post('/login', signupController)
module.exports = router
