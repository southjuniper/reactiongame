let box = document.getElementById("box");
let startBtn = document.getElementById("startBtn");
let result = document.getElementById("result");

let startTime = 0;
let timeoutId = null;
let gameActive = false;

startBtn.onclick = () => {
  result.innerHTML = "";
  box.style.background = "#ff3d3d";
  box.innerHTML = "WAIT";
  gameActive = false;

  let delay = Math.random() * 1500 + 1500;

  timeoutId = setTimeout(() => {
    box.style.background = "#57d957";
    box.innerHTML = "TAP!";
    startTime = Date.now();
    gameActive = true;
  }, delay);
};

box.onclick = () => {
  if (!gameActive) {
    result.innerHTML = "Too early! Try again.";
    clearTimeout(timeoutId);
    return;
  }

  let reaction = Date.now() - startTime;
  gameActive = false;

  if (reaction < 150) {
    result.innerHTML = `🔥 Incredible! ${reaction} ms`;
  } else if (reaction < 250) {
    result.innerHTML = `⚡ Good! ${reaction} ms`;
  } else if (reaction < 350) {
    result.innerHTML = `🙂 Average: ${reaction} ms`;
  } else {
    result.innerHTML = `🐢 Slow: ${reaction} ms`;
  }

  box.style.background = "#6a6a78";
  box.innerHTML = "DONE";
};
