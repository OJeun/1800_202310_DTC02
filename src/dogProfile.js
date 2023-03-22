//var currentUser = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
// var user = firebase.auth().currentUser;

// var userRef = db.collection("users").doc(user.id);
/*
function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid)
            addDog(user);
    
        } else {
            console.log("No user is signed in");
        }
    });
}
doAll();*/


function addDog() {

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
    }).catch((error) => {
        console.log("Error adding document: ", error);
    });

    // db.collection("users").doc(user.uid).collection("dogs").doc()
    //     .then(userDoc => {
    //         console.log(userDoc.data().name)

    // dogsCollection.limit(1).get().then((querySnapshot) => {
    //     querySnapshot.forEach(doc => {
    //         console.log(doc.data().name)
    //     })
    // })

    // if (user) {
    //     console.log("hello world");
    // } else {
    //     console.log(user)
    // }
    // userRef.collection("dogs").add({
    //     breed: "fuck",
    //     name: "fuckshit",
    //     age: "27",
    //     length: "short"
    // })
    // .then((docRef) => {
    //     console.log("document written with id: " , docRef.id);
    // })
    // .catch((error) => {
    //     console.error("error adding document ", error);
    // })
}

