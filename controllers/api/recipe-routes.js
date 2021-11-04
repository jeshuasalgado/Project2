const router = require('express').Router();
//import models when completed
const { Recipe } = require('../../models');

router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: [
            'id',
            'title',
            'ingredient_list'
        ],
    })
    .then(dbRecipeData => {
        if(!dbRecipeData) {
            res.status(404).json({message: 'no recipes in db'});
            return;
        }
        res.json(dbRecipeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Recipe.create({
        title: req.body.name,
        ingredient_list: req.body.ingredientList
    })
    .then(dbRecipeData => {
        console.log(dbRecipeData.title, dbRecipeData.ingredient_list)
        res.json(dbRecipeData)
    } )
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;