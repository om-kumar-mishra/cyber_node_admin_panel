'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class career_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  career_info.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    qulification: DataTypes.STRING,
    upload_resume: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'career_info',
  });
  return career_info;
};