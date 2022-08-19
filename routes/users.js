//require express router
const router = require('express').Router();
//require user model
let User = require('../backend/models/user.model');

//route for getting users
router.route('/:id').get((req, res) => {
    User.findOne(
        {where:{_id:req.params.id}}
    )
        .then(users => res.json(users))
        //return with error if error
        .catch(err => res.status(400).json('Error :' + err));
        
});

//add user
router.route('/add').post((req, res ) => {
    //part of request body
   const username = req.body.username;
   //create new instance of user
   const newUser = new User({username});
   //save user to db
   newUser.save()
//return json user added
           .then(() => res.json('User added'))
           //catch error if error exists
           .catch(err => res.status(400).json('Error' + err));

});

//return single user
// router.route('/:id').get((req, res) => {
//     User.findById(req.params.id)
//     .then(user => res.json(user)
//     .catch(err => res.status(400).json('Error:' + err)))
// });
//return single user
router.route('/').get((req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error:' + err))
});

module.exports = router;