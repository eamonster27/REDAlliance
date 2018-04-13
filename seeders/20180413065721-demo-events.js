'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('events',
      [
        {
          id: '75d1368c-bd8d-46fe-88a5-a2e3afd5d036',
          title: "Title1",
          description: "This is description 1.",
          location: "somewhere",
          date: new Date(),
          imageUrl: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/15591390_237157910053485_5637523635573699965_o.jpg?_nc_cat=0&oh=85ae4cf5343ba67bb0c26147f7066bfb&oe=5B6F7594",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '992e2bc5-9f5f-4dd9-8178-486a730c5a53',
          title: "Title2",
          description: "This is description 2.",
          location: "somewhere over there",
          date: new Date(),
          imageUrl: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/23132045_372434539859154_7097675193232167889_n.jpg?_nc_cat=0&oh=b8969e32bb2419da0e82c49e11ef157c&oe=5B6ADAC7",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], { individualHooks: true });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('events', null, {});
  }
};
