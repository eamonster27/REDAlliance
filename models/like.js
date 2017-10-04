'use strict';
module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define('Like', {}, {})

  Like.associate = function(models) {
    Like.belongsTo(models.User, {foreignKey: 'UserID', as: 'User'});
    Like.belongsTo(models.Post, {foreignKey: 'PostID', as: 'Post'});
  }

  return Like;
};
