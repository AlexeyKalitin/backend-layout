const db = require('../../models/index')

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await db.Todos.findOne({
      where: { uuid: req.params.id, userUUID:req.user.id},
    })
    if (todo === null) {
      return res.status(404).json("todo isn't exist")
    }

    await db.Todos.destroy({
      where: { uuid: req.params. id,userUUID:req.user.id },
    })

    return res.status(200).json(todo)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
