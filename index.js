let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let isRunning = false;

const clockElement = document.getElementById('clock');
const startButton = document.getElementById('startStopBtn');

function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

function updateClock() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
            }
        }
    }
    clockElement.innerText = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

startButton.addEventListener("click", () => {
    if (!isRunning) {
        // Start the clock
        timer = setInterval(updateClock, 1000);
        startButton.innerText = "Pause";
        isRunning = true;
    } else {
        // Stop the clock
        clearInterval(timer);
        startButton.innerText = "Start";
        isRunning = false;
    }
});