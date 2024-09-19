'use strict'

// Selecting elements
const stone = document.querySelector('.stone');
const scissor = document.querySelector('.scissor');
const paper = document.querySelector('.paper');
const iconsContainer = document.querySelector('.icons-container');
const ruleBook = document.querySelector('.rule-book-container');
const showRule = document.querySelector('.rule-btn');
const closeBtn = document.querySelector('.rule-close-btn-container');
const computerContainer = document.querySelector('.computer-container');
const computerMove = document.querySelector('.computer-move');
const winContainer = document.querySelector('.win-container');
const scoreC = document.querySelector('.computer-score');
const scoreY = document.querySelector('.your-score');

// Close & Open Rule Modal
showRule.addEventListener('click', function(){
    ruleBook.classList.remove('hidden');
});

closeBtn.addEventListener('click', ()=>{
    ruleBook.classList.add('hidden');
});


// stone
stone.addEventListener('click', ()=>{
    // Generating a number
    const random = Math.trunc(Math.random()*3) + 1;
    console.log(random);

    // display the corresponding move
    iconsContainer.classList.add('hidden');
    winContainer.classList.remove('hidden');
    computerMove.src= `images/move-${random}.png`;
    if(random===1){
        computerContainer.classList.add('one')
    }else if(random===2){
        computerContainer.classList.add('two')
    }else{
        computerContainer.classList.add('three')
    }

    // check the result
})

// paper
paper.addEventListener('click', ()=>{
    console.log('paper clicked');
})
// scissor
scissor.addEventListener('click', ()=>{
    console.log('scissor clicked');
})


