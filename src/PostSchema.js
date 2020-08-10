const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    max: 255,
    required: true,
  },
  time_created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = PostSchema;

