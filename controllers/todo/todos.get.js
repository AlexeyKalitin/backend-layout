const db = require('../../models/index')

module.exports.getTodos = async (req, res, next) => {
  try {  
    const filter = {where: {}}
    if (req.query.filterBy) filter.where.isDone = req.query.filterBy === 'done' ? true : false;
    if (req.query.order && req.query.order === 'desc')  filter.order = [['createdAt', 'desc']];
    const todos = await db.Todo.findAll(filter);
   /*  switch (req.query.filterBy) {
      case 'done':
        filter = true
        break
      case 'undone':
        filter = false
        break
      default:
        filter = undefined
        break
    }

    if (req.query.order !== undefined) {
      order = req.query.order.toUpperCase()
    }

    if (filter !== undefined) {
      todos = await db.Todo.findAll({
        where: { isDone: filter },
        order: [['createdAt', order]],
      })
    } else {
      todos = await db.Todo.findAll({
        order: [['createdAt', order]],
      })
    }
 */
    res.status(200).json(todos)
  } catch (err) {
    console.log(err);
    next({ status: 500, message: err.message })
  }
}
