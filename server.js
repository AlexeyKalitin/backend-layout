const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("todos", "client", "qwerty", {
      dialect: "postgres",
      host: "localhost"
    });