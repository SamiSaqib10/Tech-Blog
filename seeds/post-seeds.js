const { Post } = require('../models');

const postdata = [
  {
    title: 'Microsoft’s Cloud Gaming Dreams Are Falling Apart',
    post_content: 'https://www.wired.com/story/microsoft-activision-blizzard-deal-blocked/',
    user_id: 1
  },
  

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;