const Sequelize = require('sequelize');

const env = process.env;


const sequelize = new Sequelize(env.DATABASE, env.USER, env.PASSWORD, {
    host: env.HOSt,
    dialect: 'mysql' // or 'postgres', 'sqlite', 'mssql'
  });

module.exports = sequelize;