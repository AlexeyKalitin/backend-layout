const db = require('../../models/index')

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await db.Todo.findOne({ where: { uuid: req.params.id } })
    if (todo === null) {
      return res.status(404).json("todo isn't exist")
    }

    await db.Todo.destroy({
      where: { uuid: req.params.id },
    })

    return res.status(200).json(todo)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
