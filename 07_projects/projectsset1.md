# Projects related to DOM

## projectslink


# Solution code

## Project 1

``` javascript
console.log("Aditya")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  });
});
```
## Project 2

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  }else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please give a valid weight';
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2) 
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3

``` javascript

const clock = document.querySelector('#clock')





setInterval(function(){
  let date = new Date();
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

} , 1000)

```

## Project 4

``` javascript

const randomNumber = console.log(parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');


const p = document.createElement('p')

let prevguess = []
let numguess = 1

let playgame = true

if(playgame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  } else if(guess < 1){
    alert('please enter a number more than one')
  } else if(guess > 100){
    alert('please enter a number less than 100')
  } else {
    prevguess.push(guess)
    if(numguess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endgame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //
}

function displayGuess(guess){
  //
}

function displayMessage(message){
  //
}

function newGame(){
  //
}

function endgame(){
  //
}

```