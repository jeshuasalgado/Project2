
const Recipe = require('./Recipe');
const User = require('./User');

User.hasMany(Recipe, {
  foreignKey: 'user_id'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.belongsToMany(User, {
  through: Steps,
  as: 'steps_recipes',
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Recipe };