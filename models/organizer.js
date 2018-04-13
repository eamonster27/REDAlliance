'use strict';
module.exports = (sequelize, DataTypes) => {
  var organizer = sequelize.define('organizer', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: DataTypes.UUID,
    eventId: DataTypes.UUID
  }, {});
  organizer.associate = function(models) {
    // associations can be defined here
  };
  return organizer;
};
