

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in, get user ID
    var userID = firebase.auth().currentUser.uid;
    console.log(userID);

    // Use userID to access Firestore data
    db.collection("users").doc(userID).get().then(user => {
      var userData = user.data();
      console.log(userData);

      // Access symptoms data
      var symptoms = userData.symptoms;
      console.log(symptoms);

      // Check symptoms for signs of heat illness
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

      // Retrieve heat illness data from Firestore
      db.collection("Heat Illnesses").doc(ID).get().then(illness => {
        hikeInfo = illness.data();
        hikeInfo.id = illness.id;
        console.log(hikeInfo);

        dangers = hikeInfo.Dangers;
        remedies = hikeInfo.Remedies;
        console.log(dangers);
        console.log(remedies);

        document.getElementById("illness").innerHTML = hikeInfo.id;
        dangers.forEach(danger => {
          const bulletPoint = document.createElement("li");
          bulletPoint.textContent = danger;
          $("#danger").append(bulletPoint);
        });

        remedies.forEach(remedy => {
          const bulletPoint2 = document.createElement("li");
          bulletPoint2.textContent = remedy;
          $("#remedy").append(bulletPoint2);
        });
      });
    });
  } else {
    // No user is signed in
    console.log('No user is signed in');
  }
});
