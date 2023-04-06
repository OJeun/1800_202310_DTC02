var currentDog;
var currentDogId;
var currentDogName;

function switchDog() {
    currentDogMessage = document.getElementById("currentDogSelected")
    currentDogId = event.target.getAttribute("data-dog-id");
    currentDogName = event.target.getAttribute("data-dog-name");
    localStorage.setItem("currentDogId", currentDogId);
    localStorage.setItem("currentDogName", currentDogName);
    console.log(localStorage.getItem("currentDogId"))
    console.log(currentDogName)
    currentDogMessage.textContent = `You are currently viewing dog: ${currentDogName}`

}
