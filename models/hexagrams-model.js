'use strict';

const mongoose = require('mongoose');

const hexagramSchema = mongoose.Schema({
  title: String,
  text: String,
  image: String
});

var Hexagram = mongoose.model('Hexagram', hexagramSchema);
module.exports = Hexagram;
