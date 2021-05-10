import firebase from "firebase";
require ("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCQOBjivnRHs7MrCowQsVT9qpRHWscaB8A",
  authDomain: "diet-planner-ff1b6.firebaseapp.com",
  projectId: "diet-planner-ff1b6",
  storageBucket: "diet-planner-ff1b6.appspot.com",
  messagingSenderId: "705072476835",
  appId: "1:705072476835:web:b185bd8eb4d159cacd0516"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();