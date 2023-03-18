//var currentUser = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
var user = firebase.auth().currentUser;
var userRef = db.collection("users").doc(firebase.auth().currentUser.uid);


  

function addDog() {
    console.log(user)
    if (user) {
        console.log("hello world");
    } else {
        console.log(user)
    }
    userRef.collection("dogs").add({
        breed: "fuck",
        name: "fuckshit",
        age: "27",
        length: "short"
    })
    .then((docRef) => {
        console.log("document written with id: " , docRef.id);
    })
    .catch((error) => {
        console.error("error adding document ", error);
    })
}