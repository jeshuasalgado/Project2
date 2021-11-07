const router = require("express").Router();
const { Recipe } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// router.get("/logout", (req, res) => {
//     console.log('trying to logout')
//   if (req.session.loggedIn) {
//       console.log('was trying to log out')
//     req.session.destroy(() => {
//       res.status(204).end();
//       res.render('homepage');
//     });
//   } else {
//       console.log('in the else of the logout')
//       res.status(404).end();
//   }
// });

router.get('/homepage', (req, res) => {
    Recipe.findAll({
        attributes: ["id", "title", "ingredient_list", "user_id"],
      })
        .then((dbData) => {
          const recipes = dbData.map((recipe) => recipe.get({ plain: true }));
          res.render("homepage", { recipes, loggedIn: req.session.loggedIn });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.get('/addrecipe', (req, res) => {
    if(req.session.loggedIn) {
        res.render('addrecipe', {loggedIn: req.session.loggedIn});
    } else {
        res.redirect('login');
    }
})

router.get("/", (req, res) => {
  Recipe.findAll({
    attributes: ["id", "title", "ingredient_list", "user_id"],
  })
    .then((dbData) => {
      const recipes = dbData.map((recipe) => recipe.get({ plain: true }));
      res.render("homepage", { recipes, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
