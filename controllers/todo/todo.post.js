const readFile = require('../../readFile').readFile
const writeFile = require('../../writeFile').writeFile
const { v4: uuidv4 } = require('uuid')
const db = require('../../models/index')

module.exports.postTodo = async (req, res, next) => {
  try {
    const todo = await db.Todo.create(req.body)
    res.status(200).json(todo)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
