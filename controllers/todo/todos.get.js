const db = require('../../models/index')

module.exports.getTodos = async (req, res, next) => {
  try {
    const filter = { where: {} }
    if (req.query.filterBy && req.query.filterBy !== 'all')
      filter.where.isDone = req.query.filterBy === 'done' ? true : false
    if (req.query.order && req.query.order === 'desc')
      filter.order = [['createdAt', 'desc']]
    const todos = await db.Todo.findAll(filter)
    res.status(200).json(todos)
  } catch (err) {
    console.log(err)
    next({ status: 500, message: err.message })
  }
}
