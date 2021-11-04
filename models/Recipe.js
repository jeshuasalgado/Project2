const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Recipe extends Model {
  static buildrecipe(body, models) {
    return models.Steps.create({
      user_id: body.user_id,
      recipe_id: body.recipe_id
    }).then(() => {
      return Recipe.findOne({
        where: {
          id: body.recipe_id
        },
        attributes: [
          'id',
          'recipe_url',
          'title'
        ],
        include: [
          {
            model: models.Ingredients,
            attributes: ['id', 'ingredient_text', 'recipe_id']
          }
        ],
        include: [
            {
              model: models.Steps,
              attributes: ['id', 'steps_text', 'recipe_id']
            }
          ]
      });
    });
  }
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredient_list: {
      type: DataTypes.JSON,
      allowNull: true
    },      
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;
