const pathToFile = 'todoDB.txt'
const fs = require('fs').promises

exports.readFile = async () => {
  try {
    const result = await fs.readFile(pathToFile, 'utf8')
    return JSON.parse(result)
  } catch (e) {
    throw Error(e)
  }
}
