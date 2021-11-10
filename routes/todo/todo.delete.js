const express = require('express')
const router = express.Router()
const { deleteTodo } = require('../../controllers/todo/todo.delete')

router.delete('/todo/:id', deleteTodo)
module.exports = router
