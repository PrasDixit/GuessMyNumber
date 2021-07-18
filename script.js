"use strict";

const body = document.querySelector("body");
const check = document.querySelector(".check");
const highScore = document.querySelector(".highscore");
const number = document.querySelector(".number");

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const getScore = (score) => {
  document.querySelector(".score").textContent = score;
};

let generateNumber = () => {
  return Math.round(Math.random() * 9) + 1;
};
let generatedNumber = generateNumber();

let score = 10;
getScore(score);

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  //   When invalid input
  if (!guess || guess > 10) {
    displayMessage("Please enter a number between 1 to 10");

    // When Player wins
  } else if (generatedNumber === guess) {
    displayMessage("Correct Number!!!");
    number.textContent = generatedNumber;

    if (score > highScore.textContent) {
      highScore.textContent = score;
    }

    body.style.backgroundColor = "#2b8042";
    number.style.width = "30rem";

    // When guess is wrong
  } else if (guess !== generatedNumber) {
    if (score > 1) {
      score--;
      getScore(score);
      displayMessage(guess > generatedNumber ? "Too high!!!" : "Too Low!!!");
    } else {
      displayMessage("Game Over!!!");
      getScore(0);
    }
  }
});

// Again Functionality
const again = document.querySelector(".again");

//Reloads the window

// again.addEventListener("click", () => {
//   location.reload();
// });

again.addEventListener("click", () => {
  score = 10;
  generatedNumber = generateNumber();
  displayMessage(`Start guessing ...`);
  body.style.backgroundColor = "#222";
  getScore(score);
  document.querySelector(".guess").value = "";
  number.style.width = "15rem";
  number.textContent = "?";
});
