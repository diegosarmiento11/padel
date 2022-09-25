// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjiKE3YOHbWqqbycIuASyOfiAasH6kj3o",
  authDomain: "padel-auth.firebaseapp.com",
  projectId: "padel-auth",
  storageBucket: "padel-auth.appspot.com",
  messagingSenderId: "1083662247348",
  appId: "1:1083662247348:web:0b61f7eecc17c27d9c3ee1",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
