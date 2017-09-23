'use strict';
const api = require('express').Router();
const db = require('../db');
const { Campus, Student } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }));

// GET /api/campuses
api.get('/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/campuses/:campusId
api.get('/campuses/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// POST /api/campuses
api.post('/campuses', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT /api/campuses/:campusId
api.put('/campuses/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campus.findById(id)
    .then(campus => campus.update(req.body))
    .catch(next);
});

// DELETE /api/campuses/:campusId
api.delete('/campuses/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

// GET /api/students
api.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

// GET /api/students/:studentId
api.get('/students/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

// POST /api/students
api.post('/students', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students/:studentId
api.put('/students/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Student.findById(id)
    .then(student => student.update(req.body))
    .catch(next);
});

// DELETE /api/students/:studentId
api.delete('/students/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

// EXPORT
module.exports = api;
