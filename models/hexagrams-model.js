'use strict';

const mongoose = require('mongoose');

const hexagramSchema = mongoose.Schema({
  title: String,
  text: String,
  image: String
});

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;
