const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // image: {
  //   type: Sequelize.STRING,
  //   defaultValue: function () {
  //     return getRandomImage();
  //   }
  // }
});

module.exports = Student;
