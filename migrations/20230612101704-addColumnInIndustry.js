'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn( 'industry_details', 'description2',{  type: Sequelize.TEXT })
    queryInterface.addColumn( 'industry_details', 'image2',{  type: Sequelize.TEXT })

  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('industry_details', 'description2')
    queryInterface.removeColumn('industry_details', 'image2')

  }
};
