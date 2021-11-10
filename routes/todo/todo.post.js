const express = require('express')
const router = express.Router()
const { postTodo } = require('../../controllers/todo/todo.post')

router.post('/todo', postTodo)
module.exports = router
