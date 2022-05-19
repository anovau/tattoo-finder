import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDPybO2g4SL7TMgBvIy7uKw2cnV9DeI0w4",
    authDomain: "tattoos-login.firebaseapp.com",
    projectId: "tattoos-login",
    storageBucket: "tattoos-login.appspot.com",
    messagingSenderId: "319331544337",
    appId: "1:319331544337:web:d554050cfbba902e83b0b0",
    measurementId: "G-F7JCQS55V1"
})

export const auth = firebase.auth();

export default app;