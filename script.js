'use strict';
let k = 0;
let j = 0;
let l = 0;
let q = 1;
let playingContinue = true;
const Dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const currentScore = document.querySelector('.current-score');
const btnHold = document.querySelector('.btn--hold');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const Newgame = document.querySelector('.btn--new');
const nameText1 = document.querySelector('#name--0');
const nameText2 = document.querySelector('#name--1');
//toggle function
const Toggle = function(){
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}
//Roll-Dice Button
btnRoll.addEventListener('click',function(){
    if(playingContinue){
        let i = Math.trunc(Math.random()*6 + 1);
        Dice.src = `dice-${i}.png`;
        if(i!=1){
            k = i + k;
            player1.classList.contains('player--active')?current1.textContent = k:current2.textContent = k;
        }else{
            Toggle();
            current1.textContent = 0;
            current2.textContent = 0;
            q!=1? q--:q++;
            k=0;
        }
    }
})
//Button-Hold
btnHold.addEventListener('click',function(){
    if(l<100 && j<100){
        if(playingContinue){
            Toggle();
            if(q===1){
                j = k + j;
                k = 0;
                current1.textContent = 0;
                player1Score.textContent = j;
                q++;
            }else if(q===2){
                l = k + l;
                k = 0;
                current2.textContent = 0;
                player2Score.textContent = l;
                q--;
            }
        }
        if(j>=100 && l<100){
            player1.classList.add('player--winner');
            playingContinue = false;
            Dice.classList.add('hidden');
            nameText1.textContent = 'PLAYER1 WINNER';
            nameText1.classList.add('area');
        }else if(j<100 && l>=100){
            player2.classList.add('player--winner')
            playingContinue = false;
            Dice.classList.add('hidden');
            nameText2.textContent = 'PLAYER2 WINNER';
            nameText2.classList.add('area');
        }
    }   
})

Newgame.addEventListener('click',function(){
    player2.classList.contains('player--active')?Toggle():q=1;
    current1.textContent = 0;
    player1Score.textContent = 0;
    current2.textContent = 0;
    player2Score.textContent = 0;
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    nameText1.classList.remove('area');
    nameText2.classList.remove('area');
    nameText1.textContent = 'PLAYER 1';
    nameText2.textContent = 'PLAYER 2';
    Dice.classList.remove('hidden');
    playingContinue = true;
    k=0;
    l=0;
    j=0;
    q=1
})
