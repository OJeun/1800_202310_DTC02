const urlParams = new URLSearchParams(window.location.search);
const dogId = urlParams.get('id');
console.log(dogId);

var ImageFile;
window.addEventListener("load", function () {
  document.querySelector(".loader").classList.add("loader--hidden");
});

//global variable to store the File Object reference
function chooseFileListener() {
  const fileInput = document.getElementById("mypic-input"); // pointer #1
  const image = document.getElementById("mypic-goes-here"); // pointer #2

  //attach listener to input file
  //when this file changes, do something
  fileInput.addEventListener("change", function (e) {
    //the change event returns a file "e.target.files[0]"
    ImageFile = e.target.files[0];
    var blob = URL.createObjectURL(ImageFile);

    //change the DOM img element source to point to this file
    image.src = blob; //assign the "src" property of the "img" tag
  });
}
chooseFileListener();

const unique_id = Math.random().toString(36).substr(2, 9);

// Function to handle adding a new dog to the database
function addDog(event) {
  event.preventDefault();
  document.querySelector(".loader").classList.remove("loader--hidden");

  const user = firebase.auth().currentUser;
  const dogsCollection = db.collection("users").doc(user.uid).collection("dogs");

  const dogObject = createDogObject();
  const dogId = urlParams.get('id');

  if (ImageFile) {
    uploadDogImage(ImageFile, user.uid, dogId)
      .then((url) => {
        dogObject.profilePic = url;
        saveDog(dogObject, dogId, dogsCollection);
      })
      .catch((error) => {
        console.log(error);
        alert("Error occurred during image upload.");
      });
  } else {
    saveDog(dogObject, dogId, dogsCollection);
  }
}

// Function to create a dog object from the form inputs
function createDogObject() {
  const dogName = nameInput.value;
  const dogAge = ageInput.value;
  const dogBreed = breedInput.value;
  const dogHair = hairInput.value;

  return {
    name: dogName,
    age: dogAge,
    hair: dogHair,
    breed: dogBreed,
  };
}


// Function to upload a dog image to Firebase storage
// Returns a promise that resolves to the download URL for the uploaded image
function uploadDogImage(ImageFile, userId, dogId) {
  const storageRef = storage.ref(`images/${userId}/${dogId || unique_id}.jpg`);
  return storageRef.put(ImageFile)
    .then(() => {
      return storageRef.getDownloadURL();
    });
}

// This function saves or updates dog information in the Firebase Firestore database.
function saveDog(dogObject, dogId, dogsCollection) {
  // If the dogId is not null, then we are updating an existing dog
  if (dogId) {
    dogsCollection.doc(dogId).update(dogObject)
      .then(() => {
        alert("Dog updated successfully!");
        window.location.href = "main.html";
      })
      .catch((error) => {
        console.log(error);
        alert("Error occurred during dog update.");
      });
  // If the dogId is null, then we are adding a new dog
  } else {
    dogsCollection.add(dogObject)
      .then(() => {
        alert("Dog added successfully!");
        window.location.href = "main.html";
      })
      .catch((error) => {
        console.log(error);
        alert("Error occurred during dog creation.");
      });
  }
}

//This function populates the dog information in the form for editing
function populateInfo(dogId) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      getUserDogData(user.uid, dogId)
        .then(dogData => {
          updateInputs(dogData);
          updateProfilePic(dogData.profilePic);
        });
    } else {
      console.log("no user is logged in")
    }
  });
}

// This function gets the dog data from the database
function getUserDogData(userId, dogId) {
  return db.collection("users").doc(userId).collection("dogs").doc(dogId).get()
    .then(doc => doc.data());
}

// This function updates the form inputs with the dog data
function updateInputs(dogData) {
  const breedInput = document.getElementById("breedInput");
  const ageInput = document.getElementById("ageInput");
  const nameInput = document.getElementById("nameInput");
  const hairInput = document.getElementById("hairInput");
  
  // If the dog data is not null, then we update the input value
  if (dogData.breed != null) {
    breedInput.value = dogData.breed;
  }
  if (dogData.age != null) {
    ageInput.value = dogData.age;
  }
  if (dogData.name != null) {
    nameInput.value = dogData.name;
  }
  if (dogData.hair != null) {
    hairInput.value = dogData.hair;
  }
}

// This function updates the profile picture with the dog data
function updateProfilePic(picUrl) {
  const profilePic = $("#mypic-goes-here");
  
  // If the picture is not null, then we update the profile picture for the dog
  if (picUrl != null) {
    profilePic.attr("src", picUrl);
  } else {
    console.log("picURL is null");
  }
}

populateInfo(dogId);