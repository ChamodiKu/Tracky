/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDIM-1eCsXw348On523eGH_d3_HfzonQDE",
    authDomain: "tracky-ecce5.firebaseapp.com",
    databaseURL: "https://tracky-ecce5.firebaseio.com",
    projectId: "tracky-ecce5",
    storageBucket: "tracky-ecce5.appspot.com",
    messagingSenderId: "884542206986",
    appId: "1:884542206986:web:533bd99acda0493b2d9bf3",
    measurementId: "G-L0FGCBXNSE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/


import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDIM-1eCsXw348On523eGH_d3_HfzonQDE",
  authDomain: "tracky-ecce5.firebaseapp.com",
  databaseURL: "https://tracky-ecce5.firebaseio.com",
  projectId: "tracky-ecce5",
  storageBucket: "tracky-ecce5.appspot.com",
  messagingSenderId: "884542206986",
  appId: "1:884542206986:web:533bd99acda0493b2d9bf3",
  measurementId: "G-L0FGCBXNSE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
