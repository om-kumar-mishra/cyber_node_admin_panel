'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn( 'main_services','image2',{ type: Sequelize.STRING })
    queryInterface.addColumn( 'main_services','status',{ type: Sequelize.INTEGER })

  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('main_services', 'image2')
    queryInterface.removeColumn('main_services', 'status')

  }
};
