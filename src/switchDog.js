var currentDog;
var currentDogId;
function switchDog() {
    currentDogId = event.target.getAttribute("data-dog-id");
    localStorage.setItem("currentDogId", currentDogId)
    console.log(localStorage.getItem("currentDogId"))
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