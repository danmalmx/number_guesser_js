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

//Assign min and max values in UI
minNumb.textContent = min;
maxNumb.textContent = max;

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if winning number
  if (guess === winningNum) {
    //Dissable input
    guessInput.disabled = true;
    //Border green by win
    guessInput.style.borderColor = "green";
    //Message that user won
    setMessage(`${winningNum} is correct! You win!`, "green");
  } else {
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
