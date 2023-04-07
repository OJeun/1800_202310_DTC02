//  This function gets the selected symptoms from the form
function getSelectedSymptoms() {
  var symptoms = [];
  var vomiting = document.getElementById('vomiting');
  // If the symptom is checked, then we add it to the symptoms array
  if (vomiting.checked) {
    symptoms.push("vomiting");
  }
  var muscle_spasms = document.getElementById('muscle_spasms');
  if (muscle_spasms.checked) {
    symptoms.push("muscle_spasms");
  }
  var dizziness = document.getElementById('dizziness');
  if (dizziness.checked) {
    symptoms.push("dizziness");
  }
  var fatigue = document.getElementById('fatigue');
  if (fatigue.checked) {
    symptoms.push("fatigue");
  }
  var diarrhea = document.getElementById('diarrhea');
  if (diarrhea.checked) {
    symptoms.push("diarrhea");
  }
  var skin_elasticity = document.getElementById('skin_elasticity');
  if (skin_elasticity.checked) {
    symptoms.push("skin_elasticity");
  }

  console.log(symptoms);

  return symptoms;
}

// This function updates the users symptoms in database
function updateUserSymptoms(symptoms) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('User is signed in');
      var currentUser = db.collection("users").doc(user.uid)
      // This part of the code updates the users symptoms in database
      currentUser.update({
          symptoms: symptoms,
        })
        .then(() => {
          console.log("Document successfully updated!");
          window.location.href = './symptom2.html';
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    } else {
      console.log('No user is signed in');
    }
  });
}

// This function saves the users symptoms
function saveUserInfo() {
  var symptoms = getSelectedSymptoms();
  updateUserSymptoms(symptoms);
}