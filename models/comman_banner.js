'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comman_banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comman_banner.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comman_banner',
  });
  return comman_banner;
};