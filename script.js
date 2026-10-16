'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const img = document.querySelector('.dice');
const p1Score = document.querySelector('#score--0');

btnRoll.addEventListener('click', function () {
    const num = Math.trunc(Math.random() * 6) + 1;
    img.src = `dice-${num}.png`;



})