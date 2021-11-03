const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Cheeseburger.',
    post_url: 'https://www.foodrepublic.com/recipes/all-american-cheeseburger-recipe/',
    steps_id: 1
  },
  {
    title: 'Pancakes',
    post_url: 'https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/',
    steps_id: 2
  },
  {
    title: 'Spicy Chili',
    post_url: 'https://tastesbetterfromscratch.com/spicy-chili/',
    steps_id: 3
  },
  {
    title: 'Awesome Grilled Cheese',
    post_url: 'https://www.bonappetit.com/recipe/best-ever-grilled-cheese',
    steps_id: 4
  },
  {
    title: 'Chef Salad',
    post_url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/chefs-salad-recipe-2011625',
    steps_id: 5
  }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;
