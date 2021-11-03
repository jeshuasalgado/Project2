// // this has issues after the last merge need to look up handlebars.js

// const { test } = require("@jest/globals");

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../../config/connection');
// // has issues after last merger
// // add new recipe function if needed, also we need to merge api key
// class Recipe extends Model {
//   static buildrecipe(body, models) {
//     return models.Steps.create({
//       user_id: body.user_id,
//       recipe_id: body.recipe_id
//     }).then(() => {
//       return Recipe.findOne({
//         where: {
//           id: body.recipe_id
//         },
//         attributes: [
//           'recipe-body',
//           'List of ingredients'
//         ],

//         // add new api path if needed. also after the merge if messed everything up
//        // the functions are not console loggin and all the new code messed this up
//         include: [
//           {
//             model: models.Ingredients,
//             attributes: ['List of ingredients', 'recipe_id']
//           }
//         ],
//         include: [
//             {
//               model: models.recipe_id,
//               attributes: ['List of ingredients', 'recipe_id']
//             }
//           ]
//       });
//       document.querySelector('.login-btn').addEventListener('submit', loginFormHandler)

async function newRecipeHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="recipe-name"]').value;
  console.log(name);

  const ingredients = document.querySelectorAll(".recipe-body");
  console.log(ingredients);

  const ingredientArr = Array.from(ingredients);
  console.log(ingredientArr);
  const ingredientList = ingredientArr.map((input) => {
    return input.value;
  });
  console.log(ingredientList);

  const response = await fetch("api/recipes", {
    method: "POST",
    body: JSON.stringify({
      name,
      ingredientList,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".add-recipe-form")
  .addEventListener("submit", newRecipeHandler);

const addIngredient = () => {
  console.log("clicked");
  const ingredientInput = document.createElement("input");
  ingredientInput.classList.add("recipe-body");
  ingredientInput.placeholder = "Ingredient";

  addIngredientEl = document.querySelector("#ingredient-input-container");

  addIngredientEl.appendChild(ingredientInput);
};

var testBtn = document.querySelector("#add-ingredient-btn");
console.log(testBtn);

testBtn.addEventListener("click", addIngredient);
