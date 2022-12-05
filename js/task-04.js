const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

plusBtn.addEventListener("click", onPlusBtnClick);
function onPlusBtnClick() {
  counterValue++;
  document.getElementById("value").innerHTML = counterValue;
  return true;
}

minusBtn.addEventListener("click", onMinusBtnClick);

function onMinusBtnClick() {
  counterValue--;
  document.getElementById("value").innerHTML = counterValue;
  return true;
}
