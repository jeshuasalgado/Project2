const router = require('express').Router();

const ingredientRoutes = require('./ingredient-routes');
const recipeRoutes = require('./recipe-routes');
const userRoutes = require('./user-routes');

router.use('/ingredients', ingredientRoutes);
router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);

module.exports = router;