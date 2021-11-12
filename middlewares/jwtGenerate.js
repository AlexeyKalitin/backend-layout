const db = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const accessTokenSecret = require('../config.js').accessTokenSecret

const findUser = payload =>
  db.Users.findOne({
    where: {
      email: payload,
    },
  })

module.exports.jwtAuth = async (req, res, next) => {
  const { email, password } = req.body
  const user = await findUser(email)
  if (!user) {
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(404).json({ message: "User isn't exist" })
    }
  }
  const accessToken = jwt.sign({ id: user.id }, accessTokenSecret)

  res.json({
    accessToken,
  })
}
