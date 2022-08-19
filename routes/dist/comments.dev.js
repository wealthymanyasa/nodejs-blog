"use strict";

var router = require('express').Router();

var Comment = require('../backend/models/comment.model');

router.route('/').get(function (req, res) {
  Comment.find().then(function (comments) {
    return res.json(comments);
  })["catch"](function (err) {
    return res.status(400).json('Error :' + err);
  });
}); //route to add new post

router.route('/add').post(function (req, res) {
  //asign values
  var title = req.body.title;
  var like = 0;
  var description = req.body.description;
  var tags = req.body.tags; //create a new intance of user

  var newComment = new Comment({
    title: title,
    like: like,
    description: description,
    tags: tags
  }); //save post into db

  newComment.save() //return saved user added;
  .then(function () {
    return res.status(201).send('Comment added');
  });
  res.status(201).send('Status: Created') //or error msg
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
}); //filter comments

router.route('/filter').get(function _callee(req, res) {
  var uid, filter_type, filter_value, filteredComments;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          uid = req.body.user_id;
          filter_type = req.body.filter_type;
          filter_value = req.body.filter_value;
          _context.next = 5;
          return regeneratorRuntime.awrap(Comment.find({
            filter_type: filter_value,
            user_id: uid
          }));

        case 5:
          filteredComments = _context.sent;
          res.send(filteredComments);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}); // router.route('/like').post(async (req, res) => {
//   const id = req.body.id
//   const comment = await Comment.findById(id)
//   comment.likes = [...comment.likes,  id]
//   comment.save()
//   res.send(comment);
// });

router.route('/like/:id').post(function (req, res) {
  var id = req.params.id;
  var query = {
    _id: id
  };
  var comment = Comment.findById(req.params.id);
  comment.like++; // .then(comments => res.json(comments))
  //.catch(err => res.status(400).json('Error:' + err))
});
router.route('/unlike').post(function _callee2(req, res) {
  var id, comment;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.body.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Comment.findById(id));

        case 3:
          comment = _context2.sent;
          comment.likes = comment.likes.splice(id, 1);
          comment.save();
          res.send(comment);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.route('/search/:search_value').get(function _callee3(req, res) {
  var id, comments;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.search_value;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Comment.find({}));

        case 3:
          comments = _context3.sent;
          res.send(comments);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = router;