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

// Close & Open Rule Modal
showRule.addEventListener("click", function () {
  ruleBook.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  ruleBook.classList.add("hidden");
});

// ===========DISPLAY CORRESPOND RANDOM IMAGE============= 
moves.forEach((move) => {
  move.addEventListener("click", (event) => {
    const clickedImageAlt = event.target.alt;

    // Generating a number
    const random = Math.trunc(Math.random() * 3) + 1;
    console.log(random);

    icons.classList.add("hidden");
    win.classList.remove("hidden");
    yourMoveEl.src = `images/move-${clickedImageAlt}.png`;
    PCMoveEL.src = `images/move-${random}.png`;
    if (clickedImageAlt === "1") {
      yourMoveContainer.classList.add("one");
      yourMoveContainer.classList.add("stone-img");
    } else if (clickedImageAlt === "2") {
      yourMoveContainer.classList.add("two");
      yourMoveContainer.classList.add("paper-img");
    } else {
      yourMoveContainer.classList.add("three");
      yourMoveContainer.classList.add("scissor-img");
    }

    if (random === 1) {
      PCMoveContainer.classList.add("one");
    } else if (random === 2) {
      PCMoveContainer.classList.add("two");
    } else {
      PCMoveContainer.classList.add("three");
    }

  });
});

// ===========PLAY AGAIN============= 

playAgain.addEventListener('click', ()=>{
    win.classList.add('hidden');
    icons.classList.remove('hidden');
})