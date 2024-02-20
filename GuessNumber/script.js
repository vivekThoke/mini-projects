let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector(".userInput");
const submit = document.querySelector("#subt");
const guessed = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
const resultParas = document.querySelector(".resultParas")

const p  = document.createElement("p")

let previous = [];
let guessNumber = 1;

let startGame = true;

if (startGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(e);
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Pleas enter the valid number");
    }
    else if(guess < 1){
        alert("Please enter a valid number.")
    }
    else if(guess > 100) {
        alert("Please enter a valid number")
    }
    else {
        previous.push(guess)
        if (guess === 11) {
            displayMessage(`Game over the random number is ${randomNumber}`)
            displayMessage(guess)
            endGame()
        }
        else {
            displayGuess(guess)
            displayCheck(guess)
        }
    }
}

function displayCheck(guess) {
    if (guess === randomNumber) {
        displayMessage("You have made a correct guesss")
        endGame();
    }
    if (guess < randomNumber) {
        displayMessage("Your guess is to low")
    }
    else if(guess > randomNumber) {
        displayMessage("Your guess is too high")
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessed.innerHTML += `${guess} `
    guessNumber++;
    lastResult.innerHTML = `${11 - guessNumber}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="button">Start a new Game</h2>`
    resultParas.appendChild(p)
    startGame = false
    newGame()
    
}

function newGame() {
    const newButton = document.querySelector("#button")
    newButton.addEventListener("click", function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previous = [];
        guessed.innerHTML = "";
        guessNumber = 1
        lastResult.innerHTML = `${11 - guessNumber}`
        userInput.removeAttribute("disabled")
        resultParas.removeChild(p)

        startGame = true
    })
}