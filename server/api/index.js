const api = require('express').Router();
const db = require('../../db');

// ROUTE(s)
api.use('/campuses', require('./campuses'));
api.use('/students', require('./students'));

// EXPORT
module.exports = api;
