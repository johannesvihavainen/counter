var decreaseButton = document.querySelector('.decrease');
var resetButton = document.querySelector('.reset');
var increaseButton = document.querySelector('.increase');
var textCounter = document.querySelector('.counter');

var counter = 0;

function setCounter() {
    decreaseButton.addEventListener('click', function () {
        counter--;
        updateCounter();
    });
    resetButton.addEventListener('click', function () {
        counter = 0;
        updateCounter();
    });
    increaseButton.addEventListener('click', function () {
        counter++;
        updateCounter();
    });
}

function updateCounter() {
    textCounter.innerHTML = counter;
}

setCounter();