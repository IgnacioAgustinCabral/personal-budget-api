'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      this.hasMany(Category, {
        foreignKey: 'category_id',
        as: 'Categories',
      });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Category.init(
    {
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
    }
  );
  return Category;
};
