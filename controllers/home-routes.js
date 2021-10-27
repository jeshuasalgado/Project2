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
})