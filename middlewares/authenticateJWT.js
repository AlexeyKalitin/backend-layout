const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const accessTokenSecret = require('../config.js').accessTokenSecret

module.exports.authenticateJWT = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (authHeader) {
      const token = authHeader.split(' ')[1]
      jwt.verify(token, accessTokenSecret, err => {
        if (err) {
          return res.sendStatus(403)
        }
        req.user = jwt.decode(token)
        next()
      })
    } else {
      res.sendStatus(401)
    }
  }
  catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
