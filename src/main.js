$(document).ready(function() {
    // Fetch the list of dog breeds from the API
    $.ajax({
        url: "https://dog.ceo/api/breeds/list/all",
        dataType: "json",
        success: function(data) {
            // Extract the breed names from the response
            var breeds = Object.keys(data.message);
            
            // Populate the autocomplete input field with the breed names
            $("#breed-input").autocomplete({
                source: breeds
            });
            
            // Populate the dropdown menu with the breed names
            var dropdown = $("#breed-dropdown");
            breeds.forEach(function(breed) {
                var option = $("<option>").text(breed);
                dropdown.append(option);
            });
        }
    });
});

function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global
            console.log(currentUser);

            // the following functions are always called when someone is logged in
            insertNameFromFirestore();
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();

function insertNameFromFirestore() {
    currentUser.get().then(userDoc => {
        //get the user name
        var user_Name = userDoc.data().name;
        console.log(user_Name);
        localStorage.setItem("username", user_Name);
        document.getElementById("offcanvasNavbarLabel").textContent = user_Name;
        $("#name-goes-here").text(user_Name); //jquery
        // document.getElementByID("name-goes-here").innetText=user_Name;
    })
}
insertNameFromFirestore