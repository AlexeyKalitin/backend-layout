const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const accessTokenSecret = 'Myaccesstokensecret'

module.exports.authenticateJWT = (req, res, next) => {
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
