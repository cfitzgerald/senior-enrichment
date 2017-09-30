const Campus = require('./Campus');
const Student = require('./Student');

// ASSOCATION(s)
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student,
};
