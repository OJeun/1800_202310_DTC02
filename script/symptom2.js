// This function populates the Heat illnesses from the Firestore database and populates it to the HTML page
function retrieveUserHeatIllnessData() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // This part of the code check if the user is signed in and gets user ID
      var userID = firebase.auth().currentUser.uid;
      console.log(userID);

      db.collection("users").doc(userID).get().then(user => {
        var userData = user.data();
        console.log(userData);

        // Read symptoms data from Firestore database
        var symptoms = userData.symptoms;
        console.log(symptoms);

        // Check symptoms for signs of heat illness
        ID = getIllness(symptoms);

        // Retrieve heat illness data from Firestore
        displayIllnessInfo(ID);
      });
    } else {
      // No user is signed in
      console.log('No user is signed in');
    }
  });
}

retrieveUserHeatIllnessData();

// This function checks the symptoms and returns the ID of the heat illness
function getIllness(symptoms) {
  if (symptoms.includes("skin_elasticity")) {
    var ID = "Dehydration"
  } else if (symptoms.includes("muscle_spasms") && (!symptoms.includes("vomiting") || !symptoms.includes("diarrhea") || !symptoms.includes("fatigue"))) {
    var ID = "Heat Cramps"
  } else if (symptoms.includes("muscle_spasms") && (symptoms.includes("vomiting") || symptoms.includes("diarrhea") || symptoms.includes("fatigue"))) {
    var ID = "Heat Exhaustion"
  } else {
    var ID = "Heat Stroke"
  }

  console.log(ID);
  return ID;
}

// This function retrieves the heat illness data from the Firestore database
function displayIllnessInfo(ID) {
  db.collection("Heat Illnesses").doc(ID).get().then(illness => {
    illnessInfo = illness.data();
    illnessInfo.id = illness.id;
    console.log(illnessInfo);

    dangers = illnessInfo.Dangers;
    remedies = illnessInfo.Remedies;
    console.log(dangers);
    console.log(remedies);

    // Populate the HTML page with the dangers data from Firestore
    document.getElementById("illness").innerHTML = illnessInfo.id;
    dangers.forEach(danger => {
      const bulletPoint = document.createElement("li");
      bulletPoint.textContent = danger;
      $("#danger").append(bulletPoint);
    });

    // Populate the HTML page with the remedies data from Firestore
    remedies.forEach(remedy => {
      const bulletPoint2 = document.createElement("li");
      bulletPoint2.textContent = remedy;
      $("#remedy").append(bulletPoint2);
    });
  });
}