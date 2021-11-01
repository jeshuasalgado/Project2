const { Ingredients } = require('../models');

const ingredientdata = [
  {
    ingredient_text: 'Nunc rhoncus dui vel sem.',
    steps_id: 1,
    recipe_id: 1
  },
  {
    ingredient_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    steps_id: 2,
    recipe_id: 2
  },
  {
    ingredient_text: 'Aliquam erat volutpat. In congue.',
    steps_id: 3,
    recipe_id: 3
  },
  {
    ingredient_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    steps_id: 4,
    recipe_id: 4
  },
  {
    ingredient_text: 'In hac habitasse platea dictumst.',
    steps_id: 5,
    recipe_id: 5
  }
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientdata);

module.exports = seedIngredients;
