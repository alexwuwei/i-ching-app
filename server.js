'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/env');
const mongoose = require('mongoose');
const hexagrams = require(__dirname + '/models/hexagrams-model');

const DB_PORT = process env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect('DB_PORT');

app.use(bodyParser.json());
let middleRouter = express.Router();
require(__dirname + '/routes/route-handle')(middleRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http:localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
next();
});
app.use('/', middleRouter);

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});
