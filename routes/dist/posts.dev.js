"use strict";

var router = require('express').Router();

var Comment = require('../backend/models/comment.model');

router.route('/').get(function (req, res) {
  Comment.find().then(function (posts) {
    return res.json(posts);
  })["catch"](function (err) {
    return res.status(400).json('Error :' + err);
  });
}); //route to add new post

router.route('/add').post(function (req, res) {
  //asign values
  var title = req.body.title;
  var description = req.body.description;
  var tags = req.body.tags; //create a new intance of user

  var newPost = new Post({
    title: title,
    description: description,
    tags: tags
  }); //save post into db

  newComment.save() //return saved user added
  .then(function () {
    return res.json('Post added');
  }) //or error msg
  ["catch"](function (err) {
    return res.status(400).json('Error' + err);
  });
}); //find post by id

router.route('/:id').get(function (req, res) {
  Comment.findById(req.params.id).then(function (comments) {
    return res.json(comments);
  })["catch"](function (err) {
    return res.status(400).json('Error:' + err);
  });
});
module.exports = router;