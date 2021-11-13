const express = require('express')
const router = express.Router()
const { deleteTodo } = require('../../controllers/todo/todo.delete')
const authenticateJWT = require('../../middlewares/authenticateJWT').authenticateJWT

router.delete('/todo/:id', authenticateJWT, deleteTodo)
module.exports = router
