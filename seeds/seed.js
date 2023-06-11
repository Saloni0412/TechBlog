const sequelize = require('../config/connection');
const { user, blogPost, comment } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await user.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogPosts = await blogPost.bulkCreate(blogPostData, {
    returning: true,
  });

  for (const comment of commentData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomBlogPost = blogPosts[Math.floor(Math.random() * blogPosts.length)];
    await comment.create({
      ...comment,
      userId: randomUser.id,
      blogPostId: randomBlogPost.id,
    });
  }

  process.exit(0);
};

seedDatabase();
