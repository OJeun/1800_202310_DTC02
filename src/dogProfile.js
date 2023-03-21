//var currentUser = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
// var user = firebase.auth().currentUser;
// var userRef = db.collection("users").doc(firebase.auth().currentUser.uid);

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
doAll();
  

function addDog(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            console.log(userDoc.name)
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
})
}

