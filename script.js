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

let currentSum, activePlayer, playing, scores;

const init = function(){
    currentSum = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

const switchPlayer = function () {
    currentSum = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


btnRoll.addEventListener('click', function () {
    if(playing) {
    const num = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${num}.png`;

    if (num !== 1) {
        currentSum += num;
        document.getElementById(`current--${activePlayer}`).textContent = currentSum;
    } else {
        switchPlayer();
    }
};
});

btnHold.addEventListener('click', function () {
    if(playing){
    // adding current score to active player's score 
    scores[activePlayer] += currentSum;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //cheak if total score is >= 100
    if (scores[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
        // switching the player
        switchPlayer();
    }
};
});

btnNew.addEventListener('click', function() {
    init();
});
