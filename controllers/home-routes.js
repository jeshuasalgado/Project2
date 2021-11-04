const router = require("express").Router();
const sequelize = require("../config/connection");
const { Ingredients, Recipe, Steps } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get('/homepage', (req, res) => {
    if(!req.session.loggedIn) {
        res.render('login');
    } else {
        res.render('homepage');
    }
});

router.get('/addrecipe', (req, res) => {
    if(!req.session.loggedIn) {
        res.render('login');
    } else {
        res.render('addrecipe')
    }
})

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      res.render('homepage');
    });
  } else {
    res.status(404).end();
  }
});

router.get("/", (req, res) => {
  Recipe.findAll({
    attributes: ["id", "title", "ingredient_list", "user_id"],
  })
    .then((dbData) => {
      const recipes = dbData.map((recipe) => recipe.get({ plain: true }));
      res.render("homepage");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
