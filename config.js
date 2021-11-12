const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  PORT: process.env.PORT || 3200,
  accessTokenSecret: process.env.accessTokenSecret
}
