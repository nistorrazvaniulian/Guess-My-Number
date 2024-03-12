"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const number = document.querySelector(".number");
const body = document.querySelector("body");
const scoreEl = document.querySelector(".score");
const h1El = document.querySelector("h1");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const disable = function () {
  document.getElementById("check").disabled = true;
  document.getElementById("check").classList.add("btn-disabled");
  document.getElementById("scoreInput").readOnly = true;
  document.querySelector(".guess").value = "";
};

const enable = function () {
  document.getElementById("check").disabled = false;
  document.getElementById("check").classList.remove("btn-disabled");
  document.getElementById("scoreInput").readOnly = false;
};

//CHECK eventListener
document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage("Please insert a number");
  }

  //WHEN guess === secretNumber
  else if (guess === secretNumber) {
    displayMessage("Yay! You guessed my number!");
    h1El.textContent = "Well Done!";
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    disable();

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //WHEN guess !== secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    } else {
      scoreEl.textContent = 0;
      body.style.backgroundColor = "#cc0000";
      number.textContent = secretNumber;
      h1El.textContent = "Unlucky!";
      disable();
      displayMessage("You lost the game!");
    }
  }
});

//AGAIN button eventListener
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
  body.style.backgroundColor = "#222";
  number.textContent = "?";
  number.style.width = "15rem";
  enable();
});
