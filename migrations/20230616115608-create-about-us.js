'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('about_us', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      who_image: {
        type: Sequelize.STRING
      },
      who_description: {
        type: Sequelize.TEXT
      },
      mission_description: {
        type: Sequelize.TEXT
      },
      vision_description: {
        type: Sequelize.TEXT
      },
      v_m_image: {
        type: Sequelize.STRING
      },
      v_m_title: {
        type: Sequelize.STRING
      },
      v_m_description: {
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
    await queryInterface.dropTable('about_us');
  }
};