// Execute on window load, retrieves user's dogs data from Firestore and populates the dogs list on the page, 
// also checks if user has a dog selected and displays it, and displays a message to prompt user to add a dog if no dogs are found.

window.onload = async function () {
  console.log("window on load successful");
  await firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var dogsCollection = db.collection("users").doc(user.uid).collection("dogs");
      dogsCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Access the fields in the document using the data() method
          const dogData = doc.data();
          const dogId = doc.id;
          console.log(dogData.profilePic);
          dogsArray.push({
            id: dogId,
            name: dogData.name,
            age: dogData.age,
            breed: dogData.breed,
            profilePic: dogData.profilePic
          });

        });
        const listOfDogs = document.getElementById("dogsList");
        dogsArray.forEach(dog => {
          if (!dog.profilePic) {
            dog.profilePic = "https://easydrawingguides.com/wp-content/uploads/2018/09/Snoopy-10.png"
          }
          console.log(dog.profilePic);
          listOfDogs.innerHTML += ` 
                                   <div class="card">
                                    <img id="mypic-goes-here" src="${dog.profilePic}" alt="./images/snoopy.jpeg" width=50 height=50 />
    <div class="card-body" style="padding: 4px">
      <h5 class="card-title">${dog.name}</h5>
      <a href="#" class="btn btn-primary btn-custom" style="background-color: var(--third-color); color:rgb(248, 248, 248) " data-dog-id="${dog.id}" data-dog-name ="${dog.name}" onclick = "switchDog()">Select</a>
    </div>
  </div>`;
        });
      }).catch(error => {
        console.log("Error getting dogs collection:", error);
      });
      console.log(dogsArray);
    }


    if (localStorage.getItem("currentDogName") !== null) {
      console.log("you have a dog selected")
      document.getElementById("currentDogSelected").innerHTML = "Selected Dog: " + localStorage.getItem("currentDogName");
    } else {
      console.log("current dog is null")
    }

    var dogsCollection = db.collection("users").doc(user.uid).collection("dogs");
    var noDogs;
    dogsCollection.get().then(querySnapshot => {
      if (querySnapshot.empty) {
        console.log("You have dogs");
        document.getElementById("currentDogSelected").innerHTML = "Get Started by adding a dog";
      }
    }).catch(error => {
      console.log("Error getting document:", error);
    });
  });
};

$(document).ready(function () {
  // Fetch the list of dog breeds from the API
  $.ajax({
    url: "https://dog.ceo/api/breeds/list/all",
    dataType: "json",
    success: function (data) {
      // Extract the breed names from the response
      var breeds = Object.keys(data.message);

      // Populate the autocomplete input field with the breed names
      $("#breed-input").autocomplete({
        source: breeds
      });

      // Populate the dropdown menu with the breed names
      var dropdown = $("#breed-dropdown");
      breeds.forEach(function (breed) {
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
    $("#name-goes-here").text(user_Name);
  })
}
insertNameFromFirestore