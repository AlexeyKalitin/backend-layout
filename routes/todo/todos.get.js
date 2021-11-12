const express = require('express')
const router = express.Router()
const getTodos  = require('../../controllers/todo/todos.get').getTodos

router.get('/todos', getTodos)
module.exports = router
