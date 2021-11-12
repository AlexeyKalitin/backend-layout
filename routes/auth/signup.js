const express = require('express')
const router = express.Router()
const signupController = require('../../controllers/auth/auth.signup').signupController

router.post('/signup', signupController)
module.exports = router