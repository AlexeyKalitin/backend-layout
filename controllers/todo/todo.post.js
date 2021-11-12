const db = require('../../models/index')

module.exports.postTodo = async (req, res, next) => {
  try {
    req.body.userUUID = req.user.id
    const todo = await db.Todos.create(req.body)
    res.status(200).json(todo)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
