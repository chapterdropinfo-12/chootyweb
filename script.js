const revealButton = document.querySelector("#revealButton");
const intro = document.querySelector("#intro");
const messageWrap = document.querySelector("#messageWrap");
const heartField = document.querySelector("#heartField");

let heartTimer;

function createHeart() {
  const heart = document.createElement("span");
  const size = Math.floor(Math.random() * 24) + 18;
  const left = Math.random() * 100;
  const drift = Math.floor(Math.random() * 180) - 90;
  const duration = (Math.random() * 3.5 + 4.5).toFixed(2);

  heart.className = "floating-heart";
  heart.textContent = "♥";
  heart.style.left = `${left}%`;
  heart.style.setProperty("--size", `${size}px`);
  heart.style.setProperty("--drift", `${drift}px`);
  heart.style.setProperty("--duration", `${duration}s`);

  heartField.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

function startHearts() {
  for (let index = 0; index < 18; index += 1) {
    window.setTimeout(createHeart, index * 120);
  }

  heartTimer = window.setInterval(createHeart, 420);
}

revealButton.addEventListener("click", () => {
  revealButton.disabled = true;
  intro.classList.add("has-opened");
  messageWrap.classList.add("is-visible");
  startHearts();
  messageWrap.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("pagehide", () => {
  window.clearInterval(heartTimer);
});
