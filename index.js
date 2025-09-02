// Digital Clock Script
// Here in let and const are used to make the varabiles real and store the data in const
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let isRunning = false;

// these are getting the elements from the ids and creating a variable for them
const clockElement = document.getElementById('clock');
const startStopBtn = document.getElementById('StartStopBtn');


// This function is used to format the time in two digits
function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}
// This function is used to update the clock
function updateClock() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    if (hours >= 24) {
        hours = 0;
    }
    clockElement.innerText =
      `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

// handle start/Stop button click
startStopBtn.addEventListener('click', () => {
    if (!isRunning) {  // ❌ use !isRunning to start
        timer = setInterval(updateClock, 1000); 
        isRunning = true;
        startStopBtn.innerText = "Stop";
    } else {
        clearInterval(timer);
        isRunning = false;
        startStopBtn.innerText = "Start";
    }
});
