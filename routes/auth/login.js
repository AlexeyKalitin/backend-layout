const express = require('express')
const router = express.Router()
const signinController =
  require('../../controllers/auth/auth.signin').signinController
const jwtAuth = require('../../middlewares/jwtGenerate').jwtAuth

router.post('/signin', jwtAuth, signinController)
module.exports = router
