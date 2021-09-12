'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Envelope, {
        foreignKey: 'user_id',
        as: 'users',
      });
    }

    // toJSON() {
    //   return { ...User.get(), id: undefined };
    // }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
      timestamps: true,
    }
  );
  return User;
};
