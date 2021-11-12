const express = require('express')
const router = express.Router()
const getTodos  = require('../../controllers/todo/todos.get').getTodos
const authenticateJWT = require('../../middlewares/authenticateJWT').authenticateJWT

router.get('/todos',authenticateJWT, getTodos)
module.exports = router
