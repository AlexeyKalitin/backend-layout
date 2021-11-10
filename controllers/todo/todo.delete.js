const readFile = require('../../readFile').readFile
const writeFile = require('../../writeFile').writeFile

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const todos = await readFile()
    const isExist = todos.find(todo => todo.uuid === req.params.id)

    if (isExist === undefined) {
      return next({ status: 404, message: "todo isn't exist" })
    }
    
    const filterTodos = todos.filter(todo => todo.uuid !== req.params.id)
    await writeFile(filterTodos)
    return res.status(200).json(req.body)
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
