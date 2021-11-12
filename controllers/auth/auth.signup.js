const db = require('../../models/index')
const hashPassword = require('../../passwordOp.js').hashPassword

const findOrCreate = payload =>
  db.Users.findOrCreate({
    where: { email: payload.email },
    defaults: { ...payload },
  })

const signupService = async (req, res, next) => {
  try {
    const password = await hashPassword(req.body.password)
    const email = req.body.email.toLowerCase()

    const [account, created] = await findOrCreate({
      ...req.body,
      password,
      email,
    })
    if (!created) {
      return res.status(400).json({
        status: 'fail',
        message: 'user already exist',
      })
    }
    
    return res.status(201).json({
      status: 'success',
      message: 'user successfully created',
      payload: account.toJSON(),
    })
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}

module.exports.signupController = async (req, res, next) => {
  await signupService(req, res, next)
}
