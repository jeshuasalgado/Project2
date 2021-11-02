// this has issues after the last merge need to look up handlebars.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// has issues after last merger 
// add new recipe function if needed, also we need to merge api key
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
          'recipe-body',
          'List of ingredients'
        ],
       
        // add new api path if needed. also after the merge if messed everything up
       // the functions are not console loggin and all the new code messed this up
        include: [
          {
            model: models.Ingredients,
            attributes: ['List of ingredients', 'recipe_id']
          }
        ],
        include: [
            {
              model: models.recipe_id,
              attributes: ['List of ingredients', 'recipe_id']
            }
          ]
      });
      document.querySelector('.login-btn').addEventListener('submit', loginFormHandler)   
