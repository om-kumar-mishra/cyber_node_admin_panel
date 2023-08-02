'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('slugs', [
       {
        title: 'Term&Condition',
        slugName: 'term_condition',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Privacy Policy',
        slugName: 'privacy_policy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
