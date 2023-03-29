var currentUser;          //put this right after you start script tag before writing any functions.

function populateUserInfo() {
            firebase.auth().onAuthStateChanged(user => {
                // Check if user is signed in:
                if (user) {

                    //go to the correct user document by referencing to the user uid
                    currentUser = db.collection("users").doc(user.uid)
                    //get the document for current user.
                    currentUser.get()
                        .then(userDoc => {
                            //get the data fields of the user
                            var userName = userDoc.data().name;
                            var userSchool = userDoc.data().school;
                            var userCity = userDoc.data().city;

                            //if the data fields are not empty, then write them in to the form.
                            if (userName != null) {
                                document.getElementById("nameInput").value = userName;
                            }
                            if (userSchool != null) {
                                document.getElementById("schoolInput").value = userSchool;
                            }
                            if (userCity != null) {
                                document.getElementById("cityInput").value = userCity;
                            }
                        })
                } else {
                    // No user is signed in.
                    console.log ("No user is signed in");
                }
            });
        }

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