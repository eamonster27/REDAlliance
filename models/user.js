'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {}
    },
    password: {
      type: DataTypes.STRING,
      validate: {}
    }
  }, {})

  User.associate = function(models) {
    User.hasMany(models.Post, {foreignKey: 'UserID', as: 'Posts'});
    User.hasMany(models.Like, {foreignKey: 'UserID', as: 'Likes'});
  }

  return User;
};
