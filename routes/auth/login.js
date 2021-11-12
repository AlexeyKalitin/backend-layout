const express = require('express')
const router = express.Router()
const signinController =
  require('../../controllers/auth/auth.signin').signinController
const jwtAuth = require('../../controllers/auth/jwtAuth').jwtAuth

router.post('/signin', jwtAuth, signinController)
module.exports = router
