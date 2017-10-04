'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [2,140],
      }
    },

  }, {})

  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'UserID', as: 'User'});
    Post.hasMany(models.Like, {foreignKey: 'PostID', as: 'Likes'});
  }

  return Post;
};
