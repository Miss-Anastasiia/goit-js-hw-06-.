const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories:`, categoriesEl.length);

const categoriesArray = [...categoriesEl]
  .map(
    (categories) =>
      `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
