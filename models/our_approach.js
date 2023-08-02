'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class our_approach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  our_approach.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'our_approach',
  });
  return our_approach;
};