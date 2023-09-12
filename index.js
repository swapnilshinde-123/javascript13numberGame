let randomNo=(parseInt((Math.random())*100+1));

const submit = document.querySelector('#submit');
const userInput =document.querySelector('#GuessField');
const guessSlot  = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');

const loworhi =document.querySelector('.loworhi');
const startover =document.querySelector('.result_section');


const p=document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault();
  const guess= parseInt(userInput.value);
  console.log(guess);
  validateGuess(guess);
    })
}

function validateGuess(guess){
  
    if(isNaN(guess)){
        alert(`please enter valid number`);
      }
      else if(guess <1){
        alert(`please enter a number more than 1`);
      }
    else  if(guess>100){
        alert(`please enter a number less than 100`);
      }
      else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was:${randomNo}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
      }
}
function checkGuess(guess){
    if(guess === randomNo){
  displayMessage(`You Win`);
  endGame();
    }else if(guess <randomNo){
        displayMessage(`number is low`);
    }else if(guess > randomNo){
        displayMessage(`number is high`);
    }
}
function displayGuess(guess){
   userInput.value =''
   guessSlot.innerHTML += `${guess}, `;
   numGuess ++;
   remaining.innerHTML = `${11 -numGuess}`;
}

function displayMessage(message){
   loworhi.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
   const Start =document.querySelector('#newGame');
   Start.addEventListener('click',function(e){
     randomNo=(parseInt((Math.random())*100+1));
     prevGuess=[];
     numGuess =1;
     guessSlot.innerHTML ='';
     remaining.innerHTML = `${11 -numGuess}`;
     userInput.removeAttribute('disabled');
     startover.removeChild(p);
     playGame=true;
   })
}
function endGame(){
 userInput.value='' ;
 userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML = ` <h2 id="newGame">StartNewGame</h2>`;
startover.appendChild(p);
playGame =false;
newGame();
}