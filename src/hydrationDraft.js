var timerID;
var hoursRemaining;
var minutesRemaining;
var secondsRemaining;
var reminderCard;
var activeButton;
var cancelButton;
var countdown;
var endTIme;
var currentDogId = localStorage.getItem("currentDogId");
var dogTimers = {};

function timer(dogId) {
    console.log(dogId);
    reminderCard = document.getElementById("reminder");
    var activeButton = document.getElementById("submitButton")
    var cancelButton = document.getElementById("cancelButton");
    var countdown = document.getElementById("countdown");
    var hours = document.getElementById("hours");
    var hoursValue = parseInt(hours.value);

    
    var minutes = document.getElementById("minutes");
    var minutesValue = parseInt(minutes.value);


    var timeInMilliSeconds = hoursValue * 3600 * 1000 + minutesValue * 60 * 1000
   // var endTime = new Date().getTime() + timeInMilliSeconds;

    
  
    
    reminderCard.style.display = "none";
    activeButton.style.display = "none";
    countdown.style.display = "block";
    cancelButton.style.display = "block";

    var endTime = localStorage.getItem("countdownEndTime_" + dogId);
  
    if (endTime) {
      // If a countdown end time is stored, use it instead of calculating a new one
      endTime = parseInt(endTime);
      console.log("hello")
    } else {
      // Calculate the end time if a countdown end time is not already stored
      endTime = new Date().getTime() + hoursValue * 60 * 60 * 1000 + minutesValue * 60 * 1000;
      
      // Store the end time in localStorage
      localStorage.setItem("countdownEndTime_" + dogId, endTime);

    }

    if (dogTimers[dogId]) {
        clearInterval(dogTimers[dogId]);
    }
    
    
    dogTimers[dogId] = setInterval(() => {
        var now = new Date().getTime();
        var timerCountdown = endTime - now;
        hoursRemaining = Math.floor(timerCountdown / (1000 * 60 * 60));
        minutesRemaining = Math.floor((timerCountdown % (1000 * 60 * 60)) / (1000 * 60));
        secondsRemaining = Math.floor((timerCountdown % (1000 * 60)) / 1000);
        console.log(timerCountdown);


        if (timerCountdown < 0) {
            clearInterval(dogTimers[dogId]);
            //countdown.textContent = "Time to Drink Water!"
            updateCountdownDisplay(dogId, "Time to Drink Water!")
            alert("TIME TO DRINK WATER");
            // Remove the countdown end time from localStorage when the countdown is finished
            localStorage.removeItem("countdownEndTime");
        } else {
            //Update the countdown text
            updateCountdownDisplay(dogId, `Drink water in ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds`);
            //countdown.textContent = `Drink water in ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds`;
            
        }      
    }, 1000);
}

// window.onload = function() {
//     endTime = localStorage.getItem("countdownEndTime");
//     reminderCard = document.getElementById("reminder");
//     countdown = document.getElementById("countdown");
//     if (endTime) {
//       // If a countdown end time is stored, start the timer
//       reminderCard.style.display = "none";
//       countdown.style.display = "block";
//       timer();
//     } else {
//         reminderCard.style.display = "block";
//         countdown.style.display = "none";
//     }
// }

window.onload = function() {
    currentDogId = localStorage.getItem("currentDogId");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("countdownEndTime_")) {
            const dogId = key.split("_")[1]; // Extract the dogId from the key
            timer(dogId); // Start the timer for this dogId
        }
    }
};


function cancelTimer(dogId) {
    var reminderCard = document.getElementById("reminder");
    var activeButton = document.getElementById("submitButton")
    var cancelButton = document.getElementById("cancelButton");
    var countdown = document.getElementById("countdown");
    hoursRemaining = 0;
    minutesRemaining = 0;
    secondsRemaining = 0;
    countdown.textContent = `Drink water in ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds`;
    reminderCard.style.display = "block";
    activeButton.style.display = "block";
    cancelButton.style.display = "none";
    countdown.style.display = "none";
    if (dogTimers[dogId]) {
        clearInterval(dogTimers[dogId]);
        delete dogTimers[dogId]
    }    
    localStorage.removeItem("countdownEndTime_" + dogId);

}

function updateCountdownDisplay(dogId, text) {
    if (dogTimers[dogId]) {
        // Timer has been set for this dog, show the countdown element
        const countdown = document.getElementById("countdown_" + dogId);
        countdown.style.display = "block";
        countdown.textContent = text;
    } else {
        // Timer has not been set for this dog, hide the countdown element
        const countdown = document.getElementById("countdown_" + dogId);
        countdown.style.display = "none";
        countdown.textContent = "";
    }
}
