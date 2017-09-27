const api = require('express').Router();
const { Campus, Student } = require('../../db/models');

module.exports = api;

// GET /api/campuses
api.get('/', (req, res, next) => {
  Campus.findAll({ order: ['id'] })
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/campuses/:campusId
api.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// POST /api/campuses
api.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT /api/campuses/:campusId
api.put('/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campus.findById(id)
    .then(campus => campus.update(req.body))
    .catch(next);
});

// DELETE /api/campuses/:campusId
api.delete('/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
