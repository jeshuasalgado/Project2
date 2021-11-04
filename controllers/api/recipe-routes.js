const router = require('express').Router();
//import models when completed
const { Recipe } = require('../../models');

router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: [
            'id',
            'title',
            'recipe_url'
        ],
        include: [
            {
                model: Ingredients,
                attributes: ['id', 'ingredients_text']
            }
        ]
    })
    .then(dbRecipeData = res.json(dbRecipeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Recipes.create({
        title: req.body.name,
        ingredients: req.body.ingredientList
    })
    .then(dbRecipeData = res.json(dbRecipeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;