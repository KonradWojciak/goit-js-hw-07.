/// Skrypt do HTML <script src="task-01.js"> </script> musi byc umieszczony na ońcu
/// Napisz skrypt, który:
//1. Policzy i wprowadzi do wiersza poleceń liczbę kategorii w
//ul#categories, czyli elementy li.item.
//2. Dla każdego elementu li.item na liście ul#categories,
//znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>)
//i liczbę elementów w kategorii (wszystkich <li>).
//W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

const UlCategories = document.querySelector("ul#categories");
const ClassItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${ClassItems.length}`);

ClassItems.forEach((item) => {
  const ItemName = item.querySelector("h2").textContent;
  const ItemInItemName = item.querySelectorAll("li").length;

  console.log(`Category: ${ItemName}`);
  console.log(`Elements: ${ItemInItemName}`);
});
