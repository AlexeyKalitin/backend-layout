const readFile = require('../../readFile').readFile
const writeFile = require('../../writeFile').writeFile
const db = require('../../models/index')

module.exports.deleteTodo = async (req, res, next) => {
  try {

    
    return res.status(200).json()
  } catch (err) {
    next({ status: 500, message: err.message })
  }
}
