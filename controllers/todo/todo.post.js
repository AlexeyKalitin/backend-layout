const readFile = require('../../readFile').readFile
const writeFile = require('../../writeFile').writeFile
const { v4: uuidv4 } = require('uuid')
const db = require('../../models/index')


module.exports.postTodo = async (req, res, next) => {
  try {
    const todo = await db.Todo.create({ name: "2" })
    /* let todos = await readFile()

    if (!('name' in req.body))
      return next({ status: 400, message: 'request without name in body' })

    const newTodo = Object.assign(
      {
        done: false,
        createdAt: getTime(),
        uuid: uuidv4(),
      },
      req.body
    )

    await writeFile([...todos, newTodo]) */
    res.status(200).json(todo)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}