
const game = document.querySelector('.game');

const input = document.querySelector('.guess');

const checkBtn = document.querySelector('.check-btn');

const msg = document.querySelector('.msg');

const attemptsElement = document.querySelector('.Attemps');

const resetBtn = document.querySelector('.reset');

const helpBtn = document.querySelector('.help-btn');

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const closeBtn = document.querySelector('.close-btn');


// const secretNumber = Math.floor(Math.random() * 1) +7;
// console.log(secretNumber);
let attempts = 5;

let secretNumber = createSecretNumber();



function createSecretNumber() {

    return Math.floor(Math.random() * 10) + 1;

}



function showMessage(message) {

    msg.textContent = message;

}



function checkGuess() {

    const rawValue = input.value.trim();



    if (rawValue === '') {

        showMessage('Enter a number');

        return;
    }



    const guess = Number(rawValue);

    if (guess < 1 || guess > 10) {

        showMessage('Choose a number from 1 to 10');

        return;
    }



    if (guess === secretNumber) {

        showMessage('Correct⭐ ');

        game.classList.add('win');

        checkBtn.disabled = true;

        return;
    }



    attempts--;

    attemptsElement.textContent = attempts;


    if (guess > secretNumber) {

        showMessage('Too high');

    }else {

        showMessage('Too low');

    }



    if (attempts === 0) {

        showMessage('Game over');

        checkBtn.disabled = true;

        game.classList.add('lose');

    }

}



function resetGame() {

    attempts = 5;

    attemptsElement.textContent = attempts;

    input.value = '';

    showMessage('Guess a number from 1 to 10');

    checkBtn.disabled = false;

    game.classList.remove('win');

    game.classList.remove('lose');

    secretNumber = createSecretNumber();

}



checkBtn.addEventListener('click', checkGuess);



resetBtn.addEventListener('click', resetGame);

//////////// bonuses /////////////

input.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {

        checkGuess();

    }

});


helpBtn.addEventListener('click', function () {

    modal.classList.add('show');

    overlay.classList.add('show');

});


function closeModal() {

    modal.classList.remove('show');

    overlay.classList.remove('show');

}


closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {

        closeModal();

    }

});