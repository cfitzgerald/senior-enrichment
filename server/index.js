const bodyParser = require('body-parser');
// const chalk = require('chalk');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// app
const app = express();
module.exports = app;

// db
const db = require('../db');
db.sync().then(() => console.log('Database is synced'));

// logging middleware
app.use(morgan('dev'));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'public')));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 'API' routes
app.use('/api', require('./api'));

// 404 middleware
app.use((req, res, next) => {
  path.extname(req.path).length > 0 ?
    res.status(404).send('Not found') :
    next();
});

// send index.html
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`SEP listening on port ${ port }...`));
