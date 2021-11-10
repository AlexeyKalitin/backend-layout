const db = require('../../models/index')

module.exports.putTodo = async (req, res, next) => {
  try {
    //throw error if didnt find
    await db.Todo.update(req.body, { where: { uuid: req.params.id } })
    const todo = await db.Todo.findOne({ where: { uuid: req.params.id } })
    return res.status(200).json(todo)
  } catch (e) {
    next({ status: 500, message: e.message })
  }
}
