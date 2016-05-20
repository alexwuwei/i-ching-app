// 'use strict';
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const config = require('./config/env');
// const mongoose = require('mongoose');
// const hexagrams = require(__dirname + '/models/hexagrams-model');
//
// const DB_PORT = process env.MONGOLAB_URI || 'mongodb://localhost/db';
// mongoose.connect('DB_PORT');
//
// app.use(bodyParser.json());
// let middleRouter = express.Router();
// require(__dirname + '/routes/route-handle')(middleRouter);
//
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http:localhost:8080');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
// res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// next();
// });
// app.use('/', middleRouter);
//
// app.listen(config.PORT, () => {
//   console.log(`listening on port ${config.PORT}`);
// });

'use strict'

const express     = require('express');
const app         = express();
const mongoose    = require('mongoose');
const fs          = require('fs');
const path        = require('path');
const bodyParser  = require('body-parser');
const PORT        = process.env.PORT || 3000;
const Message     = require(__dirname + '/models/messages-model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});



app.get('/api/hexagrams', (req, res) => {
  console.log('get route hit');
  Hexagram.find({}).exec((err, hexagram) => {
    if (err) throw err;
    res.status(200).json(hexagram);
    // res.end();
  });
});

app.use('/', express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db');

app.listen(PORT, () => console.log('listening on 3000'));
