'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Envelope, {
        foreignKey: 'category_id',
        as: 'categories',
      });
    }

    // toJSON() {
    //   return { ...Category.get(), id: undefined };
    // }
  }
  Category.init({
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      tableName: 'categories',
      modelName: 'Category',
      timestamps:true
    }
  );
  return Category;
};
