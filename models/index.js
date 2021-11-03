
const Recipe = require('./Recipe');
const User = require('./User');
const Steps = require('./Steps');
const Ingredients = require('./Ingredients');


User.hasMany(Recipe, {
  foreignKey: 'user_id'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Recipe, {
  through: Steps,
  as: 'steps_recipes',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.belongsToMany(User, {
  through: Steps,
  as: 'steps_recipes',
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

Steps.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Steps.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

User.hasMany(Steps, {
  foreignKey: 'user_id'
});

Recipe.hasMany(Steps, {
  foreignKey: 'recipe_id'
});

Ingredients.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Ingredients.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

User.hasMany(Ingredients, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.hasMany(Ingredients, {
  foreignKey: 'recipe_id'
});

module.exports = { User, Recipe, Steps, Ingredients };