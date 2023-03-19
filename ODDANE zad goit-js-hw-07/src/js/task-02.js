const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const IngredientsList = document.querySelector("ul#ingredients");

ingredients.forEach((ingredient) => {
  const IngredientLi = document.createElement("li");
  IngredientLi.textContent = ingredient;
  IngredientLi.classList.add("item");
  IngredientsList.appendChild(IngredientLi);
});
