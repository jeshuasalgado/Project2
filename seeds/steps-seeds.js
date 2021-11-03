const { Steps } = require('../models');

const stepdata = [
  {
    steps_id: 1,
    recipe_id: 1,
    steps_text: 'Cook until the crust that forms on the bottom of the burger releases it from the pan or grate — about 2 minutes. Gently test, but dont flip it until it gets to this point. When burgers lift up easily, flip, add two slices of cheese to each, close lid if using a grill, and cook on the other side for another 2-3 minutes for medium to medium rare.'
  },
  {
    steps_id: 2,
    recipe_id: 2,
    steps_text: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
  },
  {
    steps_id: 3,
    recipe_id: 3,
    steps_text: 'Brown the meat: In a large saucepan, brown the ground beef and ground sausage, using a wooden spoon to break it into small pieces as it cooks. Drain most of the grease and remove meat to a plate'
    
  },
  {
    steps_id: 4,
    recipe_id: 4,
    steps_text: 'Place bread on a cutting board and spread mayonnaise over top side of each; this is key to a golden, delectable crunch. Heat a small skillet (nonstick, ideally) over medium. Slide in half of butter. When it melts, place 1 slice of bread, mayonnaise side down, in skillet; top with cheese; season with pepper. Top with second slice of bread, mayonnaise side up. When underside is golden brown, about 4 minutes, turn sandwich and add remaining butter to skillet. Press down on sandwich to encourage even browning and to help melt cheese—be gentle, don’t smash it. Cook until second side is golden brown and cheese is melted. Eat immediately, preferably with soup.'
  },
  {
    steps_id: 5,
    recipe_id: 5,
    steps_text: 'Tear the lettuce into bite-sized pieces and put into a large mixing bowl. Season with salt and pepper to taste and toss with 1/2 cup of the dressing. Divide the lettuce among 4 large individual serving bowls. Arrange the cheese, meats, eggs, and avocado, like the spokes of a wheel, on top of each salad. Scatter the tomatoes, cucumbers, and croutons on top. Season with salt and pepper to taste. Serve and pass the remaining dressing at the table.'
  }
];

const seedSteps = () => Steps.bulkCreate(stepdata);

module.exports = seedSteps;
