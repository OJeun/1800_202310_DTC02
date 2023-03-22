//var currentUser = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
var user = firebase.auth().currentUser;

var userRef = db.collection("users").doc(user.id);
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
   
    var user = firebase.auth().currentUser;
    var dogsCollection = db.collection("users").doc(user.uid).collection("dogs")
    if (user) {
      var dogsCollection = db.collection("users").doc(user.uid).collection("dogs");
      dogsCollection.limit(1).get().then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
          });
        } else {
          console.log("No documents found");
        }
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    } else {
      console.log("User not signed in");
    }
    
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

