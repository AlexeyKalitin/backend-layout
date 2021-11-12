const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  PORT: process.env.PORT || 3200,
  accessTokenSecret: process.env.accessTokenSecret,
  
  "production": {
    "use_env_variable":"DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      ssl: { rejectUnauthorized: false }
    }
  }
}
