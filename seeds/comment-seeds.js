const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'this is the new post',
    user_id:1 ,
    post_id: 1
  },
 
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;