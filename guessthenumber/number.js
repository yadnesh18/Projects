let randomnumber = 26 //Math.round(Math.random()*100) + 1

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField') 
const guessSlot = document.querySelector('.guesses') 
const remaining = document.querySelector('.lastResult') 
const lowOrHi = document.querySelector('.lowOrHi') 
const startOver = document.querySelector('.resultParas') 

const p = document.createElement('p')

let prevGuess = []
let numguess = 1

let playGame = true


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess< 1){
        alert('Please enter a valid number')
    }
    else if(guess>100){
        alert('Please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(numguess===10){
            displayguess(guess)
            displayMsg(`Game Over, Hint: Bday:)`)

            endGame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
      if(guess === randomnumber){
        displayMsg('Congratulations! You got it right!')
        endGame()
}
     else if(guess<randomnumber){
        displayMsg('Guessed number is low')
     }
     else if(guess>randomnumber){
        displayMsg('Guessed number is high')
     }
    }

function displayguess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess} `
    numguess++   
    remaining.innerHTML = `${11- numguess} `
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
     userInput.value=''
     userInput.setAttribute('disabled','')
     p.classList.add('button')
     p.innerHTML = `<h2 id="NewGame">Start New Game</h2>`
     startOver.appendChild(p)
     playGame = false
    setTimeout(newGame, 0);
     }

function newGame(){
    const newGamebutton= document.querySelector('#NewGame')
    newGamebutton.addEventListener('click', function(e){
    randomnumber = 26
    prevGuess = []
    numguess = 0
    guessSlot.innerHTML =''
    remaining.innerHTML = `${10- numguess} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
})
}



