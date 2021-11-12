const db = require('../../models/index')


module.exports.getTodos = async (req, res, next) => {
  try {
    const filter = { where: {} }
    if (req.query.filterBy && req.query.filterBy !== 'all') {
      filter.where.isDone = req.query.filterBy === 'done' ? true : false
    }

    if (req.query.order && req.query.order === 'desc')
      filter.order = [['createdAt', 'desc']]

    filter.where.userUUID = req.user.id
    
    const todos = await db.Todos.findAll(filter)
    res.status(200).json(todos)
  } catch (e) {
    next({ status: 500, message: e.message })
  }
}
