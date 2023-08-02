'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class industry_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  industry_images.init({
    image: DataTypes.STRING,
    industryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'industry_images',
  });
  return industry_images;
};