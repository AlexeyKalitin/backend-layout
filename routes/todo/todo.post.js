const express = require('express')
const router = express.Router()
const { postTodo } = require('../../controllers/todo/todo.post')
const authenticateJWT = require('../../middlewares/authenticateJWT').authenticateJWT

router.post('/todo', authenticateJWT, postTodo)
module.exports = router
