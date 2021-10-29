const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Steps extends Model {}

Steps.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipe',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'steps'
  }
);

module.exports = Steps;
