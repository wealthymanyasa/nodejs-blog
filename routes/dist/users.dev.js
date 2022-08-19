"use strict";

//require express router
var router = require('express').Router(); //require user model


var User = require('../backend/models/user.model'); //route for getting users


router.route('/:id').get(function (req, res) {
  User.findOne({
    where: {
      _id: req.params.id
    }
  }).then(function (users) {
    return res.json(users);
  }) //return with error if error
  ["catch"](function (err) {
    return res.status(400).json('Error :' + err);
  });
}); //add user

router.route('/add').post(function (req, res) {
  //part of request body
  var username = req.body.username; //create new instance of user

  var newUser = new User({
    username: username
  }); //save user to db

  newUser.save() //return json user added
  .then(function () {
    return res.json('User added');
  }) //catch error if error exists
  ["catch"](function (err) {
    return res.status(400).json('Error' + err);
  });
}); //return single user
// router.route('/:id').get((req, res) => {
//     User.findById(req.params.id)
//     .then(user => res.json(user)
//     .catch(err => res.status(400).json('Error:' + err)))
// });
//return single user

router.route('/').get(function (req, res) {
  User.find().then(function (user) {
    return res.json(user);
  })["catch"](function (err) {
    return res.status(400).json('Error:' + err);
  });
});
module.exports = router;