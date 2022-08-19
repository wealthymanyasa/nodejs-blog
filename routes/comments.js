const router = require('express').Router();
let Comment = require('../backend/models/comment.model');

router.route('/').get((res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error :' + err));
}
);


//route to add new post
router.route('/add').post((req, res ) => {
    //asign values
   const title = req.body.title;
   const like = 0;
   const description = req.body.description;
   const tags = req.body.tags;

//create a new intance of user
  const newComment = new Comment({
       title,
       like,
       description,
       tags,
    });
   //save post into db
   newComment.save()
   //return saved user added;
           .then(() => res.status(201).send('Comment added'))
           res.status(201).send('Status: Created')
           //or error msg
           .catch(err => res.status(400).json('Error' + err));
});

//like comment
router.route('/like').put((req, res) => {

  Comment.findByIdAndUpdate(req.body._id,{
    
     $inc: { like: 1 } 
  }, {
      new: true
  }).exec((err, result) => {
      if(err){
          return res.status(400).json({error: err})
      }else{
          res.json(result)
      }
  })
})

//unlike comment
router.route('/unlike').put((req, res) => {

  Comment.findByIdAndUpdate(req.body._id,{
    
     $inc: { like: -1 } 
  }, {
      new: true
  }).exec((err, result) => {
      if(err){
          return res.status(400).json({error: err})
      }else{
          res.json(result)
      }
  })
})

// //search comment
//   router.route('/search/:search_value').get(async (req, res) => {
//     let search_value = req.params.search_value;

//     const comments = await Comment.findOne({ name.last: 'Ghost' })
//     exec((err, comments) => {
//       if(err){
//           return res.status(400).json({error: err})
//       }else{
//           res.json(comments)
//       }
//   })

//   });

  //filter comments
router.route('/filter').get(async (req, res) => {
  const _id = req.body._id
  const filter_type = req.body.filter_type;
  const filter_value = req.body.filter_value;

  const filteredComments = await Comment.find({filter_type: filter_value, _id:_id})

  res.send(filteredComments);

});
//sort most recently added
router.route('/sortRecent').get( (req,res) => {
  let comments = [];
  comments = Comment.find()
  .sort({ createdAt: 'desc'})
  .then(comments => res.json(comments))
  .catch(err => res.status(400).json('Error :' + err));
  

});
//sort with most liked/ with more likes
router.route('/sortMostLiked').get( (req,res) => {
  let comments = [];
  comments = Comment.find()
  .sort({ like: -1})
  .then(comments => res.json(comments))
  .catch(err => res.status(400).json('Error :' + err));
  

});

//find post by id
router.route('/:id').get((req, res) => {
  Comment.findById(req.params.id)
  .then(comments => res.json(comments))
  .catch(err => res.status(400).json('Error:' + err))
});
module.exports = router;

