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
    console.log(currentDogMessage)
}
// function switchDog() {
//     console.log("fuckthisshit")
//     document.querySelectorAll('a[data-dog-id]').forEach((dogLink) => {
//         dogLink.addEventListener("click", (event) => {
//         // Prevent the link from navigating to a new page
//         event.preventDefault();
        
//         // Retrieve the ID of the dog from the data attribute
//         var dogId = event.target.getAttribute("data-dog-id");
        
//         // Do something with the ID of the dog
//         console.log("Clicked dog with ID " + dogId);
//         });
//         localStorage.setItem("currentDogId", currentDogId)
//     });
// }