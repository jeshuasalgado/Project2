const router = require('express').Router();
const sequelize = require('../config/connection');
const { Ingredients, Recipe, Steps } = require('../models');

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
})

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
                attributes: ['ingredients_text', 'recipe_id']
            },
            {
                model: Steps,
                attributes: ['recipe_id']
            }
        ]
    })
    .then(dbData => {
        const recipes = dbData.map(recipe => recipe.get({ plain: true }));
        res.render('addrecipe');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;