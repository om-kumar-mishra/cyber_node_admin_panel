'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class why_we_count extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  why_we_count.init({
    customers_served: DataTypes.INTEGER,
    cybersecurity_projects: DataTypes.INTEGER,
    customer_retention: DataTypes.INTEGER,
    cybersecurity_experts: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'why_we_count',
  });
  return why_we_count;
};