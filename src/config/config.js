require('dotenv').config();

const config = {
  development: {
    username: process.env.DB_USER || 'postgres',
    url: process.env.DB_URL,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  }
};

module.exports = config;