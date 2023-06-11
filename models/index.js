const user = require('./user');
const blogPost = require('./blogPost');
const comment = require('./comment');

// Define associations
user.hasMany(blogPost, { foreignKey: 'user_id' });
blogPost.belongsTo(user, { foreignKey: 'user_id' });

user.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(user, { foreignKey: 'user_id' });

blogPost.hasMany(comment, { foreignKey: 'blogPost_id' });
comment.belongsTo(blogPost, { foreignKey: 'blogPost_id' });

// Export models
module.exports = {
  user,
  blogPost,
  Comment
};
