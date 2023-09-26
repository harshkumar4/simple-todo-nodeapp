const Sequelize = require('sequelize');

const db = require('../../config/database');

module.exports = db.define('User',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: Sequelize.STRING,
        allowNull: false

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
  
})