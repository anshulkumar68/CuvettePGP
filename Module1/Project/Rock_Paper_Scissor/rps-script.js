"use strict";

// Selecting elements
const stone = document.querySelector(".stone");
const scissor = document.querySelector(".scissor");
const paper = document.querySelector(".paper");
const icons = document.querySelector(".icons-container");
const ruleBook = document.querySelector(".rule-book-container");
const showRule = document.querySelector(".rule-btn");
const closeBtn = document.querySelector(".rule-close-btn-container");
const PCMoveContainer = document.querySelector(".computer-container");
const yourMoveContainer = document.querySelector(".your-container");
const PCMoveEL = document.querySelector(".computer-move");
const yourMoveEl = document.querySelector(".your-move");
const moves = document.querySelectorAll(".move");
const win = document.querySelector(".win-container");
const playAgain = document.querySelector(".play-again-btn");
const scoreC = document.querySelector(".computer-score");
const scoreY = document.querySelector(".your-score");


let gameActive = true;

// Close & Open Rule Modal
showRule.addEventListener("click", function () {
  ruleBook.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  ruleBook.classList.add("hidden");
});

const choice = ['stone', 'paper', 'scissor'];
// ===========DISPLAY CORRESPOND RANDOM IMAGE============= 
moves.forEach((move) => {
  move.addEventListener("click", (event) => {
    if (!gameActive)
      return;

    const clickedImageAlt = event.target.alt;
    const playerChoice = Number(event.target.alt);

    //1. Generating a number
    const random = Math.trunc(Math.random() * 3) + 1;

    // let human = clickedImageAlt;
    let pc = random;

    //2. Display the move
    icons.classList.add("hidden");
    win.classList.remove("hidden");
    yourMoveEl.src = `images/move-${clickedImageAlt}.png`;
    PCMoveEL.src = `images/move-${random}.png`;
    if (clickedImageAlt === "1") {
      yourMoveContainer.classList.add("one", "stone-img");
    } else if (clickedImageAlt === "2") {
      yourMoveContainer.classList.add("two", "paper-img");
    } else {
      yourMoveContainer.classList.add("three", "scissor-img");
    }

    if (random === 1) {
      PCMoveContainer.classList.add("one", "stone-img");
    } else if (random === 2) {
      PCMoveContainer.classList.add("two", "paper-img");
    } else {
      PCMoveContainer.classList.add("three", "scissor-img");
    }

    //3. Calculate score
    if (playerChoice === random) {
      return "";
    } else if (
      (playerChoice === 1 && random === 3) ||
      (playerChoice === 2 && random === 1) ||
      (playerChoice === 3 && random === 2)
    ) {
      let temp = Number(scoreY.textContent) + 1;
      scoreY.textContent = temp;
    } else {
      let temp = Number(scoreC.textContent) + 1;
      scoreC.textContent = temp;
    }

    // Check if someone has won
    checkForWinner();
  });
});

// ==== Check for winner
function checkForWinner() {
  if (Number(scoreY.textContent) >= 3) {
    alert('You win');
    gameActive = false;
  } else if (Number(scoreC.textContent) >= 3) {
    alert('you-lost');
    gameActive = false;
  }
}
// ===========PLAY AGAIN============= 

playAgain.addEventListener('click', () => {
  win.classList.add('hidden');
  icons.classList.remove('hidden');
  yourMoveContainer.classList.remove("one", "stone-img");
  yourMoveContainer.classList.remove("two", "paper-img");
  yourMoveContainer.classList.remove("three", "scissor-img");
  PCMoveContainer.classList.remove("one");
  PCMoveContainer.classList.remove("two");
  PCMoveContainer.classList.remove("three");
})


// ===========WIN EFFEC