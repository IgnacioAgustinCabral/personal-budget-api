'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envelope extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Envelope.hasMany(models.Category, {
        foreignKey: 'category_id',
        as: 'Categories',
      });
      Envelope.hasMany(models.User, {
        foreignKey: 'user_id',
        as: 'Users',
      });
    }
  }
  Envelope.init(
    {
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      amount: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Envelope',
    }
  );
  return Envelope;
};
