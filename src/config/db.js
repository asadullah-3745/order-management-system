const { Sequelize } = require('sequelize');
const config = require('./config');

const dbConfig = config.development;

const sequelize = new Sequelize(
  dbConfig.url || {
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database
  },
  {
    dialect: dbConfig.dialect,
    logging: dbConfig.logging
  }
);

module.exports = sequelize;
