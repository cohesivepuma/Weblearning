'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Fuck yeah, you get it!';

document.querySelector('.score').textContent = 114;
document.querySelector('.number').textContent = 514;

document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value)
*/
const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(secretNumber);
    let ifguess = guess>0 && guess<21;

    if(!ifguess){
        document.querySelector('.message').textContent = 'Please try to put in the number!';
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Great!You got it!';
    }else if(guess <= secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lose the game!';
            document.querySelector('.score').textContent = 0;
        }
    }else if(guess >= secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lose the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});