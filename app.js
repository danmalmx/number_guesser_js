//Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
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

//Pay again even listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if winning number
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You win!`);
  } else {
    //Subtract chances left
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over

      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNum}`
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

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Dissable input
  guessInput.disabled = true;
  //Border green by win
  guessInput.style.borderColor = color;
  //Text color green
  message.style.color = color;
  //Message that user won
  setMessage(msg);

  //Play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//Get winn ing number randomly
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
