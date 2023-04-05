"use strict";

//TODO check button disabled when losing game and winning game, dont't let the player insert the same value 2 times in a row

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//CHECK eventListener
document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage("Please insert a number");
  }

  //WHEN GUESS = SECRET NUMBER
  else if (guess === secretNumber) {
    displayMessage("Yay! You guessed my number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //WHEN GUESS IS WRONG
  else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("You lost the game!");
    }
  }

  //AGAIN eventListener
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
  });
});
