


function addDog(event) {
    event.preventDefault()
    console.log('hello')
    const dogTakeName = document.getElementById("nameInput");
    const dogName = nameInput.value;
    const dogTakeAge = document.getElementById("ageInput");
    const dogAge = ageInput.value;
    const dogTakeBreed = document.getElementById("breedInput");
    const dogBreed = breedInput.value;
    const dogTakeHair = document.getElementById("hairInput");
    const dogHair = hairInput.value;

    user = firebase.auth().currentUser;
    var dogsCollection = db.collection("users").doc(user.uid).collection("dogs")
    dogsCollection.add({
        name: dogName,
        age: dogAge,
        hair: dogHair,
        breed: dogBreed
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("dogProfileForm").submit();
        window.location.href = "main.html"
    }).catch((error) => {
        console.log("Error adding document: ", error);
    });


}   

// const firebaseConfig = {
//     apiKey: "AIzaSyAm6CxtFR8Y8MK-set8QKae7HEV5agcj0E",
//     authDomain: "comp1800-hotdog.firebaseapp.com",
//     projectId: "comp1800-hotdog",
//     storageBucket: "comp1800-hotdog.appspot.com",
//     messagingSenderId: "984374057153",
//     appId: "1:984374057153:web:62c8d3b98c50b23253dc40"
// };
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const storageRef = firebase.storage().ref();
// const firestore = firebase.firestore();

function uploadImage() {
    const file = document.getElementById('imageUpload').files[0];
    const user = auth.currentUser;
    if (user) {
      const imageRef = storageRef.child('profilePictures/' + user.uid + '/' + file.name);
      imageRef.put(file).then(() => {
        console.log('Image uploaded successfully!');
        // Call a function to update the user's profile picture in Cloud Firestore
        updateUserProfilePicture(user.uid, imageRef.fullPath);
      });
    }
  }
  

