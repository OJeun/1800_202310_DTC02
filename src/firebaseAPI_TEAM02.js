//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAm6CxtFR8Y8MK-set8QKae7HEV5agcj0E",
    authDomain: "comp1800-hotdog.firebaseapp.com",
    projectId: "comp1800-hotdog",
    storageBucket: "comp1800-hotdog.appspot.com",
    messagingSenderId: "984374057153",
    appId: "1:984374057153:web:62c8d3b98c50b23253dc40"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();