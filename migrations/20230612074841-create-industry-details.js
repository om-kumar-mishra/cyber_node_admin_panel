'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('industry_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      icon: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      sub_title: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      image2: {
        type: Sequelize.STRING
      },
      description2: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('industry_details');
  }
};