'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    content: DataTypes.STRING
  }, {})

  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'UserID', as: 'User'});
    Post.hasMany(models.Like, {foreignKey: 'PostID', as: 'Like'});
  }
  
  return Post;
};
