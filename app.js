const button = document.getElementById("btn");
const coin = document.getElementById("coin");
const shadow = document.getElementById("shadow");
let coinLabel = document.querySelector(".coinLabel");

coin.src = "resources/heads.svg";

// restart animation
function restartAnimation(el) {
  el.classList.remove("active");
  el.classList.remove("randomActive");
  void el.offsetWidth;
  el.classList.add("active");
  el.classList.add("randomActive")
}

// my flip logic
function flip(result) {
  restartAnimation(coin);
  restartAnimation(shadow);


  coin.addEventListener("animationend", () => {
    coin.src = `resources/${result}.svg`;
    coinLabel.textContent = result.toUpperCase();
  }, { once: true });
}

// coin click = toggle
coin.addEventListener("click", () => {
  let result = coin.src.includes("heads.svg") ? "tails" : "heads";
  flip(result);
});

// button click = random
button.addEventListener("click", () => {
    restartAnimation(button);
  let result = Math.random() < 0.5 ? "heads" : "tails";
  flip(result);
});
