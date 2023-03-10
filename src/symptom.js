var symptoms = [];

function saveUserInfo() {
  var currentUser = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
  // get user entered values
  var vomiting = document.getElementById('vomiting');
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
  
  // log symptoms for debugging
  console.log(symptoms);

  // update user's symptoms in database
  currentUser.update({
      symptoms: symptoms,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
}
