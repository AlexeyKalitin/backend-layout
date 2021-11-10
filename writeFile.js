const pathToFile = 'todoDB.txt'
const fs = require('fs').promises

exports.writeFile = async todos => {
  try {
    await fs.writeFile(pathToFile, JSON.stringify(todos), 'utf8')
  } catch (e) {
    throw Error(e)
  }
}
