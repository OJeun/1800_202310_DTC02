waterReminderText = document.getElementById("waterReminder");
dogWaterName = localStorage.getItem("currentDogName");
if (dogWaterName == null) {
    waterReminderText.innerHTML = "Any dog not selected yet! <br> Please select a dog on the info"
    document.getElementById("texty").style.backgroundColor = "var(--danger-color)";
} else {
    waterReminderText.innerHTML = `It is recommended for ${dogWaterName} to drink water every few hours`
}

const hoursSelect = document.getElementById('hours');
const minutesSelect = document.getElementById('minutes');
const caption = document.getElementById('caption');

hoursSelect.addEventListener('change', updateCaption);
minutesSelect.addEventListener('change', updateCaption);

function updateCaption() {
    const hours = parseInt(hoursSelect.value);
    const minutes = parseInt(minutesSelect.value);
    if (!isNaN(hours) && !isNaN(minutes)) {
        caption.textContent = `${hours} hours ${minutes} minutes`;
    }
}

var timerID;
var hoursRemaining;
var minutesRemaining;
var secondsRemaining;
var reminderCard;
var activeButton;
var cancelButton;
var countdown;
var endTime;

// This function checks if the user has entered a value in both the hours and minutes fields
function timerCheck() {
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

    // Call individual functions to check for errors
    if (!checkBothFieldsFilled(hoursValue, minutesValue)) {
        return false;
    }
    if (!checkMinutesFieldFilled(minutesValue)) {
        return false;
    }
    if (!checkHoursFieldFilled(hoursValue)) {
        return false;
    }

    timer();
    // If a countdown end time is stored, use it instead of
}

// This function checks if the user has entered a value in both the hours and minutes fields
function checkBothFieldsFilled(hoursValue, minutesValue) {
    if (isNaN(hoursValue) && isNaN(minutesValue)) {
        console.log("hours and minutes are empty");
        let warning = createWarningElement("both time fields cannot be empty");
        replaceCaptionContent(warning);
        return false;
    }
    return true;
}

// This function checks if the user has entered a value in the minutes field
function checkMinutesFieldFilled(minutesValue) {
    if (isNaN(minutesValue)) {
        console.log("minutes is empty");
        let warning = createWarningElement("minutes field cannot be empty");
        replaceCaptionContent(warning);
        return false;
    }
    return true;
}

// This function checks if the user has entered a value in the hours field
function checkHoursFieldFilled(hoursValue) {
    if (isNaN(hoursValue)) {
        console.log("hours is empty");
        let warning = createWarningElement("hours field cannot be empty");
        replaceCaptionContent(warning);
        return false;
    }
    return true;
}

// This function creates a warning element
function createWarningElement(text) {
    let warning = document.createElement('span');
    warning.textContent = text;
    warning.style.color = "red";
    return warning;
}

// This function replaces the content of the caption element
function replaceCaptionContent(element) {
    var caption = document.getElementById('caption');
    while (caption.firstChild) {
        caption.removeChild(caption.firstChild);
    }
    caption.appendChild(element);
}

function timer() {
    console.log("hello world");
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

window.onload = function () {
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