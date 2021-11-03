const { Ingredients } = require('../models');

const ingredientdata = [
  {
    ingredient_text: '2 pounds freshly ground chuck 1 tablespoon onion powder 1 teaspoon salt 1 teaspoon freshly ground black pepper 12 slices deli-counter American cheese 6 large burger buns, preferably homemade, toasted if desired',
    steps_id: 1,
    recipe_id: 1
  },
  {
    ingredient_text: '1 ½ cups all-purpose flour 3 ½ teaspoons baking powder 1 teaspoon salt 1 tablespoon white sugar 1 ¼ cups milk 1 egg 3 tablespoons butter, melted',
    steps_id: 2,
    recipe_id: 2
  },
  {
    ingredient_text: '3 lbs ground beef, 1 green pepper diced, 1 red bell pepper diced, 1 medium onion diced, 3 small jalapeno peppers diced, salt and pepper, 2 teaspoons garlic powder, 1/3 cup chili powder, 1 1/2 Tablespoons cumin, 1 1/2 cups ketchup, 3 Tablespoons lime juice, 2 Tablespoons brown sugar, 1 Tablespoon Worcestershire sauce, 2 teaspoons vinegar, 1 1/2 teaspoons mustard, 3 cups spicy hot V8, 16 oz can kidney beans 1 14.5 oz can fire roasted tomatoes, salt and pepper',
    steps_id: 3,
    recipe_id: 3
  },
  {
    ingredient_text: '2 slices ½”-thick Pullman or other white bread, 2 tablespoons mayonnaise, 1 tablespoon unsalted butter, 2 ounces thinly sliced American cheese or cheddar, Freshly ground black pepper',
    steps_id: 4,
    recipe_id: 4
  },
  {
    ingredient_text: '1 1/2 pounds Boston, Bibb, green or red leaf lettuce, or a mixture, washed, trimmed, and dried, Kosher salt and freshly ground black pepper, 1 cup dressing of your choice, such as shallot or herb vinaigrette, ranch, or blue cheese, 4 ounces imported Swiss cheese, cut into 2-inch long matchstick pieces, 4 ounces baked ham, cut into 2-inch long matchstick pieces, 4 ounces smoked turkey, chicken or duck breast, cut into 2-inch long matchstick pieces, 4 ounces rare roast beef, cut into 1/4-inch by 2 inch matchstick pieces, 2 hard-cooked eggs, shelled, cut into wedges, 1 ripe Hass avocado, 16 vine-ripened cherry or grape tomatoes, 2 kirby (pickling) cucumbers, 1 cup toasted croutons',
    steps_id: 5,
    recipe_id: 5
  }
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientdata);

module.exports = seedIngredients;
