const express = require('express');
const router = require('./router');
const cors = require('cors');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/api', router);

app.use(
  errorHandlers.validationErrorHandler,
  errorHandlers.sequelizeErrorHandler,
  errorHandlers.errorHandler
);

module.exports = app;
