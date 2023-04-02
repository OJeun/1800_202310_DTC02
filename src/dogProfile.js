
var ImageFile;      //global variable to store the File Object reference

function chooseFileListener() {
  const fileInput = document.getElementById("mypic-input");   // pointer #1
  const image = document.getElementById("mypic-goes-here");   // pointer #2

  //attach listener to input file
  //when this file changes, do something
  fileInput.addEventListener('change', function (e) {

    //the change event returns a file "e.target.files[0]"
    ImageFile = e.target.files[0];
    var blob = URL.createObjectURL(ImageFile);

    //change the DOM img element source to point to this file
    image.src = blob;    //assign the "src" property of the "img" tag
  })
}
chooseFileListener();

function addDog(event) {
  event.preventDefault()

  
  const dogName = nameInput.value;
  const dogAge = ageInput.value;
  const dogBreed = breedInput.value;
  const dogHair = hairInput.value;


  user = firebase.auth().currentUser;
  console.log(user.uid)
  var storageRef = storage.ref("images/" + user.uid + ".jpg");
  var dogsCollection = db.collection("users").doc(user.uid).collection("dogs")
  storageRef.put(ImageFile).then(function () {
    storageRef.getDownloadURL()
      .then(function (url) { // Get "url" of the uploaded file
        console.log("Got the download URL.");
        //get values from the from
        dogsCollection.add({
          name: dogName,
          age: dogAge,
          hair: dogHair,
          breed: dogBreed,
          profilePic: url
        }).then(function () {
          console.log("Hi");
          document.getElementById("dogProfileForm").submit();
          alert("Dog added successfully!");
          window.location.href = "main.html";
          // document.getElementById('personalInfoFields').disabled = true;
        })

        //Asynch call to save the form fields into Firestore.

      })
  })
}

function populateInfo() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // go and get the curret user info from firestore
      currentUser = db.collection("users").doc(user.uid).collection("dogs").doc(dog.uid);

      currentUser.get()
        .then(userDoc => {
          // let userName = userDoc.data().name;
          // let userSchool = userDoc.data().school;
          // let userCity = userDoc.data().city;
          let picUrl = userDoc.data().profilePic;
          console.log(picUrl)

          // if (userName != null) {
          //     document.getElementById("nameInput").value = userName;
          // }
          // if (userSchool != null) {
          //     document.getElementById("schoolInput").value = userSchool;
          // }
          // if (userCity != null) {
          //     console.log(userCity)
          //     document.getElementById("cityInput").value = userCity;
          // }
          if (picUrl != null) {
            console.log(picUrl);
            // use this line if "mypicdiv" is a "div"
            //$("#mypicdiv").append("<img src='" + picUrl + "'>")
            $("#mypic-goes-here").attr("src", picUrl);
          }
          else
            console.log("picURL is null");
        })

    } else {
      console.log("no user is logged in")
    }
  }

  )

}
populateInfo();