
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

            // Log the fields to the console
            // console.log("Dog name:", dogData.name);
            // console.log("Dog breed:", dogData.breed);
            // console.log("Dog age:", dogData.age);
            // console.log(dogId);
        });
    }).catch((error) => {        
        console.log("Error getting dogs collection:", error);
    });
    console.log(dogsArray);

}


