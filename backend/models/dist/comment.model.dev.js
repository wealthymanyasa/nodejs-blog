"use strict";

//
var mongoose = require('mongoose');

mongoose.set('debug', true);
var Schema = mongoose.Schema;
var TAGS = ["MBTI", "Enneagram", "Zodiac"];
var commentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  like: {
    type: Number
  },
  tags: {
    type: String
  },
  target: {
    TAGS: {
      type: String,
      "enum": TAGS
    }
  }
}, {
  timestamps: true
});
var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;