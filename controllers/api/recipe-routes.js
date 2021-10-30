const router = require('express').Router();
//import models when completed
const { Recipes, Ingredients, Steps} = require('../../models');

router.get('/', (req, res) => {
    Recipes.findAll({
        attributes: [
            'id',
            'name',
            'ingredient_id',
            'steps_id'
        ],
        include: [
            {
                model: Ingredients,
                attributes: ['id', 'name', 'amount']
            }
        ]
    })
    .then(dbPostData = res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;