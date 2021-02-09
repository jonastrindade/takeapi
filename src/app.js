const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const takeRoute = require('./routes/takeRoute');
app.use('/', index);
app.use('/takes', takeRoute);

module.exports = app;