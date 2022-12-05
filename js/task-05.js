const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");

inputRef.addEventListener("input", (event) => {
  return event.currentTarget.value
    ? (spanRef.textContent = event.currentTarget.value)
    : (spanRef.textContent = "Anonymous");
});
