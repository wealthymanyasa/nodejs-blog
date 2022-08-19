"use strict";

//
var mongoose = require('mongoose');

mongoose.set('debug', true);
var Schema = mongoose.Schema;
var TAGS = ["MAD", "FAD"];
var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: String
  },
  target: {
    gender: {
      type: String,
      "enum": TAGS
    }
  }
}, {
  timestamps: true
});
var Post = mongoose.model('Post', postSchema);
module.exports = Post;