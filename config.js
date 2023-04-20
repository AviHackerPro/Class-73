import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCQhzvoMA7zkpSNoph16hGenttf2br6hiA",
  authDomain: "library-b6c3e.firebaseapp.com",
  projectId: "library-b6c3e",
  storageBucket: "library-b6c3e.appspot.com",
  messagingSenderId: "1040518261059",
  appId: "1:1040518261059:web:0f03b457e80567f91be7f6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
