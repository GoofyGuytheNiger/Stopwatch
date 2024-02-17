const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const milisecondElement = document.querySelector('.milisecond');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
let interval;

function updateTimer() {
    milisecond++;
    if (milisecond === 100) {
        milisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }

    hourElement.textContent = hour < 10 ? '0' + hour : hour;
    minuteElement.textContent = minute < 10 ? '0' + minute : minute;
    secondElement.textContent = second < 10 ? '0' + second : second;
    milisecondElement.textContent = milisecond < 10 ? '0' + milisecond : milisecond;
}

startButton.addEventListener('click', function() {
    startButton.disabled = true;
    stopButton.disabled = false;
    if (!interval) {
        interval = setInterval(updateTimer, 10);
    }
});
stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(interval);
});
resetButton.addEventListener('click', function() {

    hour = 0;
    minute = 0;
    second = 0;
    milisecond = 0;

    hourElement.textContent = '00';
    minuteElement.textContent = '00';
    secondElement.textContent = '00';
    milisecondElement.textContent = '00';

    clearInterval(interval);
    interval = null;
    startButton.disabled = false;
    stopButton.disabled = true;
});
