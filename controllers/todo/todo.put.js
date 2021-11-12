const db = require('../../models/index')

module.exports.putTodo = async (req, res, next) => {
  try {
    //throw error if didnt find
    req.body.userUUID = req.user.id
    await db.Todos.update(req.body, {
      where: { uuid: req.params.id, userUUID: req.user.id },
    })
    const todo = await db.Todos.findOne({
      where: { uuid: req.params.id, userUUID: req.user.id },
    })
    return res.status(200).json(todo)
  } catch (e) {
    next({ status: 500, message: e.message })
  }
}
