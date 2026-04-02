const startScreen = document.getElementById("startScreen");
const countdown = document.getElementById("countdown");
const number = document.getElementById("number");
const intro = document.getElementById("intro");
const site = document.getElementById("site");

let count = 5;

// Simple beep (no external files needed)
function beep() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "square";
  osc.frequency.value = 800;

  gain.gain.value = 0.1;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}

startScreen.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  countdown.classList.remove("hidden");

  const interval = setInterval(() => {
    beep();
    number.textContent = count;

    count--;

    if (count < 0) {
      clearInterval(interval);

      intro.classList.add("fade");

      setTimeout(() => {
        intro.style.display = "none";
        site.classList.remove("hidden");
      }, 800);
    }
  }, 1000);
});
