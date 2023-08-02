'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('why_we_counts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customers_served: {
        type: Sequelize.INTEGER
      },
      cybersecurity_projects: {
        type: Sequelize.INTEGER
      },
      customer_retention: {
        type: Sequelize.INTEGER
      },
      cybersecurity_experts: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('why_we_counts');
  }
};