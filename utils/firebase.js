// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3OVfIsBYkNnK9Ho-UDtE92sqkuDpsUpc",
  authDomain: "my-firebase-project-3a85c.firebaseapp.com",
  projectId: "my-firebase-project-3a85c",
  storageBucket: "my-firebase-project-3a85c.appspot.com",
  messagingSenderId: "872175307833",
  appId: "1:872175307833:web:a42c1041dbc6d0f67ad1e8",
  measurementId: "G-RMDTQE1KH9"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app