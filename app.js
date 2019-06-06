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
    //Subtract chances left
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over

      //Dissable input
      guessInput.disabled = true;
      //Border green by win
      guessInput.style.borderColor = "red";
      //Message that user won
      setMessage(
        `Game over, you lost. The correct number was ${winningNum}`,
        "red"
      );
    } else {
      //Game continues - tell user wrong number anbd chances left
      //Change border color
      guessInput.style.borderColor = "red";

      //Clear input
      guessInput.value = "";

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
