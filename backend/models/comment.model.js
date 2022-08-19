//
const mongoose = require('mongoose');
mongoose.set('debug', true);
const Schema = mongoose.Schema;

const TAGS = ["MBTI", "Enneagram","Zodiac"];

const commentSchema = new Schema({
   
    title:{ type:String ,required:true},
    description:{ type:String,required:true },
    like: {type: Number},
    tags: { type: String},
    target: {
        TAGS: { type: String, enum: TAGS }
    }
        

} , {
    timestamps:true,
});

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;