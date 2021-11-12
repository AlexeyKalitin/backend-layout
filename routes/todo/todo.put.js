const express = require('express')
const router = express.Router()
const { putTodo } = require('../../controllers/todo/todo.put')
const authenticateJWT = require('../../middlewares/authenticateJWT').authenticateJWT

router.put('/todo/:id',authenticateJWT, putTodo)
module.exports = router