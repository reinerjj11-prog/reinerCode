const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainScreen = document.getElementById("mainScreen");
const finalScreen = document.getElementById("finalScreen");

// Al presionar "Sí", muestra pantalla final
yesBtn.addEventListener("click", () => {
  mainScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");
});

// Mover el botón "No" aleatoriamente al tocarlo o pasar el dedo
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const container = document.querySelector(".buttons");
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}
