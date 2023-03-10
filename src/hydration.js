function timer() {
    var reminderCard = document.getElementById("reminder");
    var activeButton = document.getElementById("submitButton")
    var cancelButton = document.getElementById("cancelButton");
    var hours = document.getElementById("hours");
    var hoursValue = parseInt(hours.value);

    
    var minutes = document.getElementById("minutes");
    var minutesValue = parseInt(minutes.value);


    var timeInMilliSeconds = hoursValue * 3600 + minutesValue * 60 * 1000
    console.log(timeInMilliSeconds);
    
    reminderCard.style.display = "none";
    activeButton.style.display = "none";
    cancelButton.style.display = "block";

    setTimeout(() =>{
        alert("times up");
    }, timeInMilliSeconds);
    
}

function cancelTimer() {

}


