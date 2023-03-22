console.log("hi")
user = firebase.auth().currentUser;
var dogsCollection = db.collection("users").doc(user.uid).collection("dogs")

// dogsCollection.get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // Access the 'name' field of the document
//       const name = doc.data().name;

//       // Perform an operation using the 'name' field
//       console.log(`Hello, ${name}!`);
//     });
//   })
//   .catch((error) => {
//     console.log('Error getting documents: ', error);
//   });

dogsCollection.get().data().name


