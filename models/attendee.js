'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('attendee', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: DataTypes.UUID,
    eventId: DataTypes.UUID
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};
