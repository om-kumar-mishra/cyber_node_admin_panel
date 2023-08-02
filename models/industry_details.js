'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class industry_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  industry_details.init({
    icon: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    description2: DataTypes.TEXT,
    sub_title: DataTypes.STRING,
    image: DataTypes.STRING,
    image2: DataTypes.STRING,



  }, {
    sequelize,
    modelName: 'industry_details',
  });
  return industry_details;
};