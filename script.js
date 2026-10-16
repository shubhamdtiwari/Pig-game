'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentSum = 0;
let score0 = 0;
let activePlayer = 0;
const scores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


btnRoll.addEventListener('click', function () {
    const num = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${num}.png`;

    if (num !== 1) {
        currentSum += num;
        document.getElementById(`current--${activePlayer}`).textContent = currentSum;

    } else {
        currentSum = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

    }

});

btnHold.addEventListener('click', function () {

});
