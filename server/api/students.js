const api = require('express').Router();
const { Campus, Student } = require('../../db/models');

module.exports = api;

// GET /api/students
api.get('/', (req, res, next) => {
  Student.findAll({ order: ['id'], include: [ Campus ] })
    .then(students => res.json(students))
    .catch(next);
});

// GET /api/students/:studentId
api.get('/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Student.findById(id)
    .then(student => res.json(student))
    .catch(next);
});

// POST /api/students
api.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// DELETE /api/students
api.delete('/', (req, res, next) => {
  console.log('DELETE /api/students/ REQ.BODY =', req.body);
  console.log('DELETE /api/students/ REQ.PARAMS =', req.params);

  const id = req.body;
  // const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

// PUT /api/students/:studentId
api.put('/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Student.findById(id)
    .then(student => student.update(req.body))
    .catch(next);
});
