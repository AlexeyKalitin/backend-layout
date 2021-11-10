const readFile = require('../../readFile').readFile
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("todos", "client", "qwerty", {
      dialect: "postgres",
      host: "localhost"
    });
module.exports.getTodos = async (req, res, next) => {
  try {
    const filterBy = req.query.filterBy
    const order = req.query.order

    let todos = await readFile()

    if (filterBy === 'done') {
      todos = todos.filter(todo => todo.done === true)
    }
    if (filterBy === 'undone') {
      todos = todos.filter(todo => todo.done === false)
    }
    if (order === 'asc') {
      todos = todos.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      )
    }
    if (order === 'desc') {
      todos = todos.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      )
    }
    res.status(200).json(todos)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
