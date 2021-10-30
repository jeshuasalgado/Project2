const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Cheeseburger.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    steps_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://nasa.gov/donec.json',
    steps_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    steps_id: 3
  },
  {
    title: 'Nunc purus.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    steps_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    steps_id: 5
  }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;
