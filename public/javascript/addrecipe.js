async function newRecipeHandler(event) {
  event.preventDefault();

  //gets name of recipe from user input
  const name = document.querySelector('input[name="recipe-name"]').value;
  console.log(name);

  const ingredients = document.querySelectorAll(".recipe-body");
  console.log(ingredients);

  const ingredientArr = Array.from(ingredients);

  // ingredientList is array of ingredients entered by user
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
