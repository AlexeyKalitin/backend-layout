'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}

const sequelize = new Sequelize('dbsg14drdr6a9f', 'dgvtwskyrqrcgs', '3b103119070b6ea8cc243a66ad6853ae34bc8e7c437a2e1f794675d68657aeea',{
  host: 'ec2-54-220-243-77.eu-west-1.compute.amazonaws.com',
  dialect: 'postgres',
  ssl: true,
  protocol: "postgres",

  logging: true,
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<< YOU NEED THIS
      }
  }
});

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
