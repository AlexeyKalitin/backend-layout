const express = require('express')
const router = express.Router()
const { putTodo } = require('../../controllers/todo/todo.put')

router.put('/todo/:id', putTodo)
module.exports = router