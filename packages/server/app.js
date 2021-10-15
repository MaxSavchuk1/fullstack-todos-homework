const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/api', router);

module.exports = app;
