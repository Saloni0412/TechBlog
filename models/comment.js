const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
    blogPost_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "BlogPost",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    timestamps: false,
  }
);

module.exports = Comment;
