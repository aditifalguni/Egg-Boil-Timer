// JavaScript for Timer Functionality

let timer;
let countdownDisplay = document.getElementById('countdown');
let timerText = document.getElementById('timer-text');
let startButton = document.getElementById('start-timer');
let softTime = 300; // 5 minutes
let mediumTime = 420; // 7 minutes
let hardTime = 600; // 10 minutes
let selectedTime;

// Button Event Listeners for Timer Settings
document.getElementById('soft').addEventListener('click', function () {
    selectedTime = softTime;
    timerText.textContent = "Soft Boiled Egg (5 minutes)";
    countdownDisplay.textContent = formatTime(selectedTime);
    startButton.disabled = false;
});

document.getElementById('medium').addEventListener('click', function () {
    selectedTime = mediumTime;
    timerText.textContent = "Medium Boiled Egg (7 minutes)";
    countdownDisplay.textContent = formatTime(selectedTime);
    startButton.disabled = false;
});

document.getElementById('hard').addEventListener('click', function () {
    selectedTime = hardTime;
    timerText.textContent = "Hard Boiled Egg (10 minutes)";
    countdownDisplay.textContent = formatTime(selectedTime);
    startButton.disabled = false;
});

// Start the Timer
startButton.addEventListener('click', function () {
    startButton.disabled = true;
    timer = setInterval(function () {
        if (selectedTime <= 0) {
            clearInterval(timer);
            countdownDisplay.textContent = "Done!";
            timerText.textContent = "Your Egg is Ready!";
        } else {
            selectedTime--;
            countdownDisplay.textContent = formatTime(selectedTime);
        }
    }, 1000);
});

// Function to format time in MM:SS
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    return minutes + ":" + remainingSeconds;
}
