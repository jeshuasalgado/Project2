const { Steps } = require('../models');

const stepdata = [
  {
    steps_id: 1,
    recipe_id: 1,
    steps_text: 'step1',
  },
  {
    steps_id: 2,
    recipe_id: 2,
    steps_text: 'step2'
  },
  {
    steps_id: 3,
    recipe_id: 3,
    steps_text: 'step3'
  },
  {
    steps_id: 4,
    recipe_id: 4,
    steps_text: 'step4'
  },
  {
    steps_id: 5,
    recipe_id: 5,
    steps_text: 'step5'
  }
];

const seedSteps = () => Steps.bulkCreate(stepdata);

module.exports = seedSteps;
