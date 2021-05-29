'use strict';
let message = document.querySelector('.message');
let numberEl = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
let highscoreEl = document.querySelector('.highscore');
let scoreEl = document.querySelector('.score');
let body = document.body;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  message.textContent = message;
};

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess === number) {
    message.textContent = '🎉 Correct Number!';
    numberEl.textContent = number;
    checkBtn.disabled = 'true';
    body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    numberEl.style.width = '30rem';
  } else if (guess !== number) {
    if (score > 1) {
      message.textContent = guess > number ? '📈 Too hight!' : '📉 Too Low!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '😢 You lost... !';
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  score = 20;
  message.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
  body.style.backgroundColor = '#222';
  scoreEl.textContent = score;
});
