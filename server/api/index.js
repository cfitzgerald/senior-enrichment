const api = require('express').Router();
const db = require('../../db');

api.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any other requests.

api.use('/campuses', require('./campuses'));
api.use('/students', require('./students'));

// EXPORT
module.exports = api;
