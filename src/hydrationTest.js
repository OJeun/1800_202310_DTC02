var timerID;
var hoursRemaining;
var minutesRemaining;
var secondsRemaining;
var reminderCard;
var activeButton;
var cancelButton;
var countdown;
var endTime;

function timer() {
    // Get the current dog ID
    var currentDogId = localStorage.getItem("currentDogId");
    // Use the current dog ID to create unique keys for the countdown end time and timer ID
    var countdownEndTimeKey = "countdownEndTime_" + currentDogId;
    var timerIdKey = "timerId_" + currentDogId;

    reminderCard = document.getElementById("reminder");
    activeButton = document.getElementById("submitButton");
    cancelButton = document.getElementById("cancelButton");
    countdown = document.getElementById("countdown");
    var hours = document.getElementById("hours");
    var hoursValue = parseInt(hours.value);

    var minutes = document.getElementById("minutes");
    var minutesValue = parseInt(minutes.value);

    var timeInMilliSeconds = hoursValue * 3600 * 1000 + minutesValue * 60 * 1000;
    var endTime = localStorage.getItem(countdownEndTimeKey);

    if (endTime) {
        // If a countdown end time is stored, use it instead of calculating a new one
        endTime = parseInt(endTime);
    } else {
        // Calculate the end time if a countdown end time is not already stored
        endTime = new Date().getTime() + timeInMilliSeconds;
        // Store the end time in localStorage
        localStorage.setItem(countdownEndTimeKey, endTime);
    }

    reminderCard.style.display = "none";
    activeButton.style.display = "none";
    countdown.style.display = "block";
    cancelButton.style.display = "block";

    timerId = setInterval(() => {
        var now = new Date().getTime();
        var timerCountdown = endTime - now;
        hoursRemaining = Math.floor(timerCountdown / (1000 * 60 * 60));
        minutesRemaining = Math.floor((timerCountdown % (1000 * 60 * 60)) / (1000 * 60));
        secondsRemaining = Math.floor((timerCountdown % (1000 * 60)) / 1000);

        if (timerCountdown < 0) {
            clearInterval(timerId);
            countdown.textContent = "Time to Drink Water!";
            alert("TIME TO DRINK WATER");
            // Remove the countdown end time from localStorage when the countdown is finished
            localStorage.removeItem(countdownEndTimeKey);
            localStorage.removeItem(timerIdKey);
        } else {
            // Update the countdown text
            countdown.textContent = `Drink water in ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds`;
        }
    }, 1000);

    // Store the timer ID in local storage using the timer ID key
    localStorage.setItem(timerIdKey, timerId);
}

window.onload = function() {
    // Get the current dog ID
    var currentDogId = localStorage.getItem("currentDogId");
    // Use the current dog ID to create unique keys for the countdown end time and timer ID
    var countdownEndTimeKey = "countdownEndTime_" + currentDogId;
    var timerIdKey = "timerId_" + currentDogId;

    reminderCard = document.getElementById("reminder");
    countdown = document.getElementById("countdown");

    var endTime = localStorage.getItem(countdownEndTimeKey);
    if (endTime) {
        // If a countdown end time is stored, start the timer and hide the reminder form
        reminderCard.style.display = "none";
        countdown.style.display = "block";
        timer();
    } else {
        // If no countdown end time is stored, show the reminder form
        reminderCard.style.display = "block";
        countdown.style.display = "none";
    }
}

function cancelTimer() {
    // Get the current dog ID
    var currentDogId = localStorage.getItem("currentDogId");
    // Use the current dog ID to create unique keys for the countdown end time and timer ID
    var countdownEndTimeKey = "countdownEndTime_" + currentDogId;
    var timerIdKey = "timerId_" + currentDogId;

    reminderCard = document.getElementById("reminder");
    activeButton = document.getElementById("submitButton");
    cancelButton = document.getElementById("cancelButton");
    countdown = document.getElementById("countdown");
    hoursRemaining = 0;
    minutesRemaining = 0;
    secondsRemaining = 0;
    countdown.textContent = `Drink water in ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds`;
    reminderCard.style.display = "block";
    activeButton.style.display = "block";
    cancelButton.style.display = "none";
    countdown.style.display = "none";
    clearInterval(timerId);
    localStorage.removeItem(countdownEndTimeKey);
    localStorage.removeItem(timerIdKey);
}

