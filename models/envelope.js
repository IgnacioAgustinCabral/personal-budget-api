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
      Envelope.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'categories',
      });
      Envelope.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users',
      });
    }

    // toJSON() {
    //   return { ...Envelope.get(), id: undefined };
    // }
  }
  Envelope.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      amount: DataTypes.FLOAT,
    },
    {
      sequelize,
      tableName: 'envelopes',
      modelName: 'Envelope',
      timestamps:true
    }
  );
  return Envelope;
};
