document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const message = document.getElementById("message");

  yesBtn.addEventListener("click", () => {
    message.innerText = "Yayyy 💖 I knew it! Happy Valentine’s Day 😘";
  });

  function moveNoButton() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Runs on hover
  noBtn.addEventListener("mouseover", moveNoButton);

  // Runs on click (important)
  noBtn.addEventListener("click", moveNoButton);
});
