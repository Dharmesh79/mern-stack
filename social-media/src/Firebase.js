import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1LlVrbMfqJTIOSPkRIAnjbNwn9sUQjSg",
  authDomain: "social-media-ca052.firebaseapp.com",
  projectId: "social-media-ca052",
  storageBucket: "social-media-ca052.appspot.com",
  messagingSenderId: "62857372639",
  appId: "1:62857372639:web:57f5747d3094dad1655a6a",
  measurementId: "G-G04D57NCER"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();


export {auth};