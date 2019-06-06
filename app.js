//Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI elements
const game = document.querySelector("#game"),
  minNumb = document.querySelector(".min-numb"),
  maxNumb = document.querySelector(".max-numb"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");
