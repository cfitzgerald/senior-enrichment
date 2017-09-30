const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL ||
  'postgres://localhost/sep', {
    logging: false
  }
);

module.exports = db;
