const dotenv = require('dotenv')
const express = require('express')
const { PORT } = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')
const recursive = require('recursive-readdir-sync')
const app = express()
const authenticateJWT = require('./middlewares/authenticateJWT').authenticateJWT

try {
  dotenv.config()
  app.use(bodyParser.json())

  app.use(cors())

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    )
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
  })
  recursive('routes/todo').forEach(file => {app.use('/',authenticateJWT, require(`./${file}`))})
  recursive('routes/auth').forEach(file => app.use('/', require(`./${file}`)))

  app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message || 'there was an error processing request',
    })
  })
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
} catch (e) {
  console.log(e)
}
