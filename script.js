'use strict';

// console.log(
//   (document.querySelector('.message').textContent = '🏆correct number')
// );

let secretNumber = Math.trunc(Math.random() * 20 + 1);
//console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMesssage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number ! ';
    displayMesssage(' ⛔ No number !');
  }
  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆 Hurray...Correct Number ';
    displayMesssage('🏆 Hurray...Correct Number ');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMesssage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😢 You lost the game !';
      displayMesssage('😢 You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//when guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😢 You lost the game !';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //when guess is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' Too low! ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😢 You lost the game !';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = '20';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMesssage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
