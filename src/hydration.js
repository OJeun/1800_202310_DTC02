var timerID;

function timer() {
    var reminderCard = document.getElementById("reminder");
    var activeButton = document.getElementById("submitButton")
    var cancelButton = document.getElementById("cancelButton");
    var countdown = document.getElementById("countdown");
    var hours = document.getElementById("hours");
    var hoursValue = parseInt(hours.value);

    
    var minutes = document.getElementById("minutes");
    var minutesValue = parseInt(minutes.value);


    var timeInMilliSeconds = hoursValue * 3600 * 1000 + minutesValue * 60 * 1000
    var endTime = new Date().getTime() + timeInMilliSeconds;
  
    
    reminderCard.style.display = "none";
    activeButton.style.display = "none";
    countdown.style.display = "block";
    cancelButton.style.display = "block";
    
    timerId = setInterval(() => {
        var now = new Date().getTime();
        var timerCountdown = endTime - now;
        var hoursRemaining = Math.floor(timerCountdown / (1000 * 60 * 60));
        var minutesRemaining = Math.floor((timerCountdown % (1000 * 60 * 60)) / (1000 * 60));
        var secondsRemaining = Math.floor((timerCountdown % (1000 * 60)) / 1000);
        console.log(timerCountdown);
        //Update the countdown text
        countdown.textContent = `Drink water in ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds`;

        if (timerCountdown < 0) {
            clearInterval(timerId);
            countdown.textContent = "Time to Drink Water!"
        }        
    }, 1000);

    
}

function cancelTimer() {
    var reminderCard = document.getElementById("reminder");
    var activeButton = document.getElementById("submitButton")
    var cancelButton = document.getElementById("cancelButton");
    var countdown = document.getElementById("countdown");

    reminderCard.style.display = "block";
    activeButton.style.display = "block";
    cancelButton.style.display = "none";
    countdown.style.display = "none";
    clearInterval(timerId);

}


