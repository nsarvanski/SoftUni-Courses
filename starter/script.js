'use strict';
let btnDice = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
let currentScore = document.getElementById('current--0');
let btnHold = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let btnNewGame = document.querySelector('.btn--new');
let activePLayer = 0;
let scoreCounter = 0;
let final0 = [0, 0];
let playing = true;
let swichPlayer = function () {
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  scoreCounter = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  currentScore.textContent = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
dice.classList.add('hidden');
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
btnDice.addEventListener('click', function () {
  if (playing) {
    let roll = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${roll}.png`;
    console.log(roll);
    if (roll !== 1) {
      scoreCounter += roll;
      document.getElementById(`current--${activePLayer}`).textContent =
        scoreCounter;
    } else {
      swichPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    final0[activePLayer] += scoreCounter;
    document.getElementById(`score--${activePLayer}`).textContent =
      final0[activePLayer];

    if (final0[activePLayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePLayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
    }
    swichPlayer();
    document
      .querySelector(`.player--${activePLayer}`)
      .classList.remove('player--active');
  }
});

btnNewGame.addEventListener('click', function () {
  playing = true;
  document.querySelector('.score'). = 0;
  dice.classList.remove('hidden');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document
    .querySelector(`.player--${activePLayer}`)
    .classList.add('player--active');
});
