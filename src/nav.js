
var dogsArray = []
// user = firebase.auth().currentUser;
// var dogsCollection = db.collection("users").doc(user.uid).collection("dogs")
function getName() {
    var user = firebase.auth().currentUser;
    var dogsCollection = db.collection("users").doc(user.uid).collection("dogs");

    dogsCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Access the fields in the document using the data() method
            const dogData = doc.data();
            const dogId = doc.id;

            dogsArray.push({
                id: dogId,
                name: dogData.name,
                age: dogData.age,
                breed: dogData.breed
            })

        });
    }).catch((error) => {        
        console.log("Error getting dogs collection:", error);
    });
    console.log(dogsArray);

}

function logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("User signed out successfully.");
  
      // Clear local storage data
      localStorage.removeItem("currentDogName");
      localStorage.removeItem("currentDogId");
      localStorage.removeItem("username")
  
  
      // Redirect to the login page
      window.location.href = "login.html";
    }).catch(function(error) {
      // An error happened.
      console.error("Error signing out: ", error);
    });
  }
  
  var formModal = document.getElementById("formModal");
  var showFormLink = document.getElementById("showFormLink");
  var closeBtn = document.getElementsByClassName("close")[0];
  
  showFormLink.onclick = function() {
    var user = firebase.auth().currentUser;
    formModal.style.display = "block";
    var editNameInput = document.getElementById("editNameInput");
    var editEmailInput = document.getElementById("editEmailInput");
    var editSchoolInput = document.getElementById("editSchoolInput");
    db.collection("users").doc(user.uid).get().then(doc => {
        editNameInput.value = doc.data().name;
        editEmailInput.value = doc.data().email;
        editSchoolInput.value = doc.data().school;
    })
  }



updateProfileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  var editNameInput = document.getElementById("editNameInput");
  var editEmailInput = document.getElementById("editEmailInput");
  var editSchoolInput = document.getElementById("editSchoolInput");

  const name = editNameInput.value;
  const email = editEmailInput.value;
  const school = editSchoolInput.value;

  const user = firebase.auth().currentUser;
  
  user.updateEmail(email)
    .then(() => {
      // Email updated successfully
      console.log("Email updated successfully");

      db.collection("users").doc(user.uid).set({
        name: name, 
        school: school, 
        email: email
      }).then(() => {
        alert("Profile updated successfully");
        console.log("Profile updated successfully");
        window.location.href = "main.html";
      }).catch((error) => {
        console.log("Error updating profile:", error);
      });

    }).catch((error) => {
      console.log("Error updating email:", error);
    });
});
  
  closeBtn.onclick = function() {
    formModal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == formModal) {
      formModal.style.display = "none";
    }
  }

// // // Get the user's name from the database

// var dogsArray = []
// // user = firebase.auth().currentUser;
// // var dogsCollection = db.collection("users").doc(user.uid).collection("dogs")
// function getName() {
//     var user = firebase.auth().currentUser;
//     var dogsCollection = db.collection("users").doc(user.uid).collection("dogs");

//     dogsCollection.get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // Access the fields in the document using the data() method
//             const dogData = doc.data();
//             const dogId = doc.id;

//             dogsArray.push({
//                 id: dogId,
//                 name: dogData.name,
//                 age: dogData.age,
//                 breed: dogData.breed
//             })

//             // Log the fields to the console
//             // console.log("Dog name:", dogData.name);
//             // console.log("Dog breed:", dogData.breed);
//             // console.log("Dog age:", dogData.age);
//             // console.log(dogId);
//         });
//     }).catch((error) => {        
//         console.log("Error getting dogs collection:", error);
//     });
//     console.log(dogsArray);

// }

// function logout() {
//     firebase.auth().signOut().then(function() {
//       // Sign-out successful.
//       console.log("User signed out successfully.");
  
//       // Clear local storage data
//       localStorage.removeItem("currentDogName");
//       localStorage.removeItem("currentDogId");
//       localStorage.removeItem("username")
  
  
//       // Redirect to the login page
//       window.location.href = "login.html";
//     }).catch(function(error) {
//       // An error happened.
//       console.error("Error signing out: ", error);
//     });
//   }
  

  
