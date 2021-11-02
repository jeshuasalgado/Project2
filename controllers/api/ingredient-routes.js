const router = require('express').Router();
const { Recipes, Ingredients, Steps} = require('../../models');

//get all ingredients on hand
router.get('/', (req, res) => {
    Ingredients.findAll({
        order: [['name', 'DESC']],
        attribute: [
            'id',
            'name',
            'amount'
        ]
    })
    .then(dbData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;