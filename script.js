let randomNumber = parseInt(Math.random() * 100 + 1); //generates random number between 1 to 100

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; //jo user submit krega usko store kr lenge taki phirse vahi value repeat na kare
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //valid guess hai ya nahi
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a valid number');
  } else {
    prevGuess.push(guess);
    // stop game after 10 tries
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`guess is right `);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is T00 low`);
  } else if (guess > randomNumber) {
    displayMessage(`number is T00 high`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `; // guess add kr rhe
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`; //guess remaining hai ye
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  // Disables the input box so you can’t guess more.
  // Adds a “Start new Game” button.
  // Prepares for the next round.
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button'); //paragraph me class button add krdi,paragraph global h
  p.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  // result paras vala pura div lenege ab, usme ab change krenge
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
