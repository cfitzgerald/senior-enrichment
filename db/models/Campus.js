const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // image: {
  //   type: Sequelize.STRING,
  //   // defaultValue: function () {
  //   //   return getRandomImage();
  //   // }
  // }
});

module.exports = Campus;
