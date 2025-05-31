'use strict';
// Write your code here
const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

// interface in/out
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

function playGame() {
  rl.question('Enter your guess: ', (userInput) => {
    // validação da entrada
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        // eslint-disable-next-line max-len
        'Invalid input! Please enter a 4-digit number with unique digits, not starting with 0.',
      );
      playGame();

      return;
    }

    // convert
    const guess = Number(userInput);

    // bulls and cows
    const { bulls, cows } = getBullsAndCows(guess, numberToGuess);

    console.log(`Result: ${bulls} bulls, ${cows} cows`);

    // check player
    if (bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      rl.close();
    } else {
      playGame();
    }
  });
}

playGame();
