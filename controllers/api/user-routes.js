const router = require('express').Router();
//import models when they are complete

//GET /api/users/:id

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        }
    })
});

module.exports = router;