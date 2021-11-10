const readFile = require('../../readFile').readFile
const { Sequelize } = require('sequelize')
const db = require('../../models/index')

module.exports.getTodos = async (req, res, next) => {
  try {
    let filter
    switch (req.query.filterBy) {
      case 'all':
        filter = undefined
        break
      case 'done':
        filter = true
        break
      case 'undone':
        filter = false
        break
    }
    filter === undefined ?
    const todos = await db.Todo.findAll({
      where: { isDone: filter },
      order: [['createdAt', req.query.order.toUpperCase()]],
    })

    res.status(200).json(todos)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
