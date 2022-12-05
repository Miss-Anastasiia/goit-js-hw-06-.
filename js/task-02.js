const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const titleEl = document.createElement("li");
  titleEl.textContent = ingredient;
  titleEl.classList.add("item");

  return titleEl;
});
console.log(navEl);
navEl.append(...elements);
