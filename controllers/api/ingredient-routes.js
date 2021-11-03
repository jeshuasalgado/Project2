const router = require('express').Router();
const { Recipes, Ingredients, Steps} = require('../../models');

//get all ingredients on hand
router.get('/', (req, res) => {
    Ingredients.findAll({
        order: [['ingredients_text', 'DESC']],
        attribute: [
            'id',
            'ingredients_text',
            'recipe_id'
        ]
    })
    .then(dbData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;