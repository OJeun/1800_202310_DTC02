// var symptoms = [];

// function saveUserInfo() {
//   console.log("inside")
//   //enter code here

//   //a) get user entered values
//   var vomiting = document.getElementById('vomiting'); //get the value of the field with id="nameInput"
//   if (vomiting.checked) {
//     // The vomiting checkbox is checked
//     console.log("vomiting checked")
//     symptoms.push("vomiting")
//   } else {
//     // The vomiting checkbox is not checked
//     console.log("vomiting not checked")
//   }
//   var muscle_spasms = document.getElementById('muscle_spasms'); //get the value of the field with id="schoolInput"
//   if (muscle_spasms.checked) {
//     // The vomiting checkbox is checked
//     console.log("muscle_spasms checked")
//     symptoms.push("muscle_spasms")
//   } else {
//     // The vomiting checkbox is not checked
//     console.log("muscle_spasms not checked")
//   }
//   var dizziness = document.getElementById('dizziness'); //get the value of the field with id="cityInput"
//   if (dizziness.checked) {
//     // The vomiting checkbox is checked
//     console.log("dizziness checked")
//     symptoms.push("dizziness")
//   } else {
//     // The vomiting checkbox is not checked
//     console.log("dizziness not checked")
//   }
//   var fatigue = document.getElementById('fatigue'); //get the value of the field with id="cityInput"
//   if (fatigue.checked) {
//     // The vomiting checkbox is checked
//     console.log("fatigue checked")
//     symptoms.push("fatigue")
//   } else {
//     // The vomiting checkbox is not checked
//     console.log("fatigue not checked")
//   }
//   var diarrhea = document.getElementById('diarrhea'); //get the value of the field with id="cityInput"
//   if (diarrhea.checked) {
//     // The vomiting checkbox is checked
//     console.log("diarrhea checked")
//     symptoms.push("diarrhea")
//   } else {
//     // The vomiting checkbox is not checked
//     console.log("diarrhea not checked")
//   }
//   var skin_elasticity = document.getElementById('skin_elasticity'); //get the value of the field with id="cityInput"
//   if (skin_elasticity.checked) {
//     // The vomiting checkbox is checked
//     console.log("skin elasticity checked")
//     symptoms.push("skin_elasticity")
//   } else {
//     // The vomiting checkbox is not checked
//     console.log("skin elasticity not checked")
//   }
//   // console log all varibles
//   console.log(vomiting)
//   console.log(muscle_spasms)
//   console.log(dizziness)
//   console.log(fatigue)
//   console.log(diarrhea)
//   console.log(skin_elasticity)
//   console.log(symptoms)
// }

// var currentUser;

// function saveUserInfo2() {
//   console.log(symptoms)
//   currentUser.update({
//       symptoms: symptoms,
//     })
//     .then(() => {
//       console.log("Document successfully updated!");
//     })
// }

var symptoms = [];

function saveUserInfo() {
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
