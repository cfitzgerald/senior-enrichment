const api = require('express').Router();
const { Campus, Student } = require('../../db/models');

module.exports = api;

// GET /api/students
api.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

// GET /api/students/:studentId
api.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

// POST /api/students
api.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students/:studentId
api.put('/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Student.findById(id)
    .then(student => student.update(req.body))
    .catch(next);
});

// DELETE /api/students/:studentId
api.delete('/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
