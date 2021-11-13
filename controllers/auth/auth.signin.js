const db = require('../../models/index')
const bcrypt = require('bcryptjs')

const findUser = payload =>
  db.Users.findOne({
    where: {
      email: payload,
    },
    logging: false,
  })

const comparePassword = (password, dbPassword) =>
  bcrypt.compare(password, dbPassword)

module.exports.signinController = async (req, res, next) => {
  try {
    const { email, password } = req.body
    console.log(req.body)
    if(!email && !password)
    return res.status(400).json({ message: "email or pass empty" })
    const user = await findUser(email) 
    if (!user) {
      return res.status(404).json({ message: "User isn't exist" })
    }
    if (!(await comparePassword(password, user.password))) {
      return res.status(400).json({ message: 'incorrect password' })
    }
    if (user && user.toJSON().blocked) {
      return res.status(400).json({
        message: 'Account is blocked',
      })
    }
    return res.status(400).json(user.toJSON())
  } catch (e) {
    next({ status: 500, message: e.message })
  }
}
