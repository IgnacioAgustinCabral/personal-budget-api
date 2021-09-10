'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envelope extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Envelope }) {
      // define association here
      this.hasMany(Category, {
        foreignKey: 'category_id',
        as: 'categories',
      });
      this.hasMany(User, {
        foreignKey: 'user_id',
        as: 'users',
      });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
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
      tableName: 'envelopes',
      modelName: 'Envelope',
    }
  );
  return Envelope;
};
