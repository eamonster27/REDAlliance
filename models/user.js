'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {})

  User.associate = function(models) {
    User.hasMany(models.Post, {foreignKey: 'UserID', as: 'Posts'});
    User.hasMany(models.Like, {foreignKey: 'UserID', as: 'Likes'});
  }

  return User;
};
