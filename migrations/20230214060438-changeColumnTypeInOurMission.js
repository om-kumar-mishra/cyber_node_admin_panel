'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('our_missions', 'description', {
        type: Sequelize.TEXT,
        allowNull: false
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('our_missions', 'description')]);
  }
};
