const readFile = require('../../readFile').readFile
const writeFile = require('../../writeFile').writeFile
const db = require('../../models/index')

module.exports.putTodo = async (req, res, next) => {
  try {
    const jane = await db.Todo.create({ name: "1", })
    return res.status(200).json(req.body)
  } catch (e) {
    next({ status: 500, message: e.message })
  }
}
