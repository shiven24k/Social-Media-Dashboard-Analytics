// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4IOr4-vClnEAJm9dMSqZvlV3IcVxCC4w",
  authDomain: "dashboard-auth-176e0.firebaseapp.com",
  projectId: "dashboard-auth-176e0",
  storageBucket: "dashboard-auth-176e0.appspot.com",
  messagingSenderId: "340972278818",
  appId: "1:340972278818:web:2e7811d022b05da6d7a67b",
  measurementId: "G-TLC1N79S9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Loggin in....");
      window.location.href="dashboard.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
