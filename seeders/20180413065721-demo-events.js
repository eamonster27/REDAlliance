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
          imageUrl: "https://www.testhr.pl/img/logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '992e2bc5-9f5f-4dd9-8178-486a730c5a53',
          title: "Title2",
          description: "This is description 2.",
          location: "somewhere over there",
          date: new Date(),
          imageUrl: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], { individualHooks: true });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
