const router = require('express').Router();
const sequelize = require('../config/connection');
// place holder for when models get setup-const {} = require('../models');

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
            'name',
            'picture',
            'ingredients_id',
            'steps_id'
        ], 
        include: [
            {
                model: Ingredients,
                attributes: ['name', 'amount']
            },
            {
                model: Steps,
                attributes: ['whatever is needed']
            }
        ]
    })
    .then(dbPostData => {
        const recipes = dbPostData.map(recipe => recipe.post({ plain: true }));
        res.render('homepage', recipes);
    })
    .cath(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;