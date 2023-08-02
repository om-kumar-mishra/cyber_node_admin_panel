'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class our_vision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  our_vision.init({
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'our_vision',
  });
  return our_vision;
};