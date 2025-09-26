const button = document.getElementById("btn");
const coin = document.getElementById("coin");
const shadow = document.getElementById("shadow");
let coinLabel = document.querySelector(".coinLabel");

coin.src = "resources/heads.svg";

 
function restartAnimation(el, className) {
  el.classList.remove(className);
  void el.offsetWidth; 
  el.classList.add(className);
}

function setResult(result) {
  coin.src = `resources/${result}.svg`;
  coinLabel.textContent = result.toUpperCase();
}

 
coin.addEventListener("click", () => {
  let result = coin.src.includes("heads.svg") ? "tails" : "heads";
  setTimeout(() => setResult(result), 300);

  restartAnimation(coin, "flip");
});

button.addEventListener("click", () => {
  let result = Math.random() < 0.5 ? "heads" : "tails";
  setTimeout(() => setResult(result), 1000);
  restartAnimation(coin, "spin");
});