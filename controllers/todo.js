const { filter } = require("bluebird");
const db = require("../models");

function success(res, payload) {
  return res.status(200).json(payload);
}

exports.getTodos = async (req, res, next) => {
  try {
    let filterBy = req.query.filterBy;
    console.log(filterBy)
    const order = req.query.order;
    switch (filterBy) {
      case "all":
        filterBy = null
        break;
      case "done":
        filterBy = true
        break;
      case "undone":
        filterBy = false
        break;
      default:
    }
    let todos = await db.list
      .find(filterBy === null || filterBy === undefined ? {} : { done: filterBy })
      .sort(order === undefined ? {} : { createdAt: `${order}` } );
    return success(res, todos);
  } catch (err) {
    next({ status: 400, message: "failed to get todos" });
  }
};

exports.postTodo = async (req, res, next) => {
  try {
    const todo = await db.list.create(req.body);
    return success(res, todo);
  } catch (err) {
    next({ status: 400, message: "failed to create todo" });
  }
};

exports.putTodo = async (req, res, next) => {
  try {
    const todo = await db.list.findOneAndUpdate(
      { uuid: req.params.id },
      req.body
    );
    if (!todo) next({ status: 404, message: "failed to updated todo" });
    return success(res, "todo updated");
  } catch (err) {
    next({ status: 400, message: "failed to update todo" });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const deletedTodo = await db.list.findOneAndDelete({ uuid: req.params.id });
    if (!deletedTodo) next({ status: 404, message: "failed to updated todo" });
    return success(res, "todo deleted");
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" });
  }
}