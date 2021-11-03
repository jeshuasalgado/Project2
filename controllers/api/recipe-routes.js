const router = require('express').Router();
//import models when completed
const { Recipes, Ingredients, Steps} = require('../../models');

router.get('/', (req, res) => {
    Recipes.findAll({
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

module.exports = router;