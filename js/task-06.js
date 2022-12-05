const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onBlurInput);

function onBlurInput() {
  if (this.getAttribute("data-length") > this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
}
