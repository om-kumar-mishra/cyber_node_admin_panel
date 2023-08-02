'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    queryInterface.addColumn(
      'contacts',
      'summary',
      {
        type: Sequelize.STRING
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('contacts', 'summary')
  }
};
