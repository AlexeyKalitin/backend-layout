const express = require('express')
const router = express.Router()
const { getTodos } = require('../../controllers/todo/todos.get')

router.get('/todos', getTodos)
module.exports = router
