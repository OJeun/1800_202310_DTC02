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

function uploadDogImage(ImageFile, userId, dogId) {
  const storageRef = storage.ref(`images/${userId}/${dogId || unique_id}.jpg`);
  return storageRef.put(ImageFile)
    .then(() => {
      return storageRef.getDownloadURL();
    });
}

function saveDog(dogObject, dogId, dogsCollection) {
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


function populateInfo(dogId) {
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // go and get the curret user info from firestore
        currentUser = db.collection("users").doc(user.uid).collection("dogs").doc(dogId);
        console.log(currentUser)

        currentUser.get()
          .then(userDoc => {
            let dogBreed = userDoc.data().breed;
            console.log(dogBreed)
            let dogName = userDoc.data().name;
            console.log(dogName)
            let dogAge = userDoc.data().age;
            let dogHair = userDoc.data().hair;
            let picUrl = userDoc.data().profilePic;
            // console.log(picUrl)

            if (dogBreed != null) {
              document.getElementById("breedInput").value = dogBreed;
            }
            if (dogAge != null) {
              document.getElementById("ageInput").value = dogAge;
            }
            if (dogName != null) {
              document.getElementById("nameInput").value = dogName;
            }
            if (dogHair != null) {
              document.getElementById("hairInput").value = dogHair;
            }
            if (picUrl != null) {
              console.log(picUrl);
              // use this line if "mypicdiv" is a "div"
              //$("#mypicdiv").append("<img src='" + picUrl + "'>")
              $("#mypic-goes-here").attr("src", picUrl);
            } else
              console.log("picURL is null");
          })

      } else {
        console.log("no user is logged in")
      }
    }

  )

}
populateInfo(dogId);