import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2rY9b5qdRdeCIuYST2KM9O0GOO2Okgv8",
  authDomain: "heath-2d871.firebaseapp.com",
  projectId: "heath-2d871",
  storageBucket: "heath-2d871.appspot.com",
  messagingSenderId: "917759191967",
  appId: "1:917759191967:web:d4d0f71bf96cf3432bebaa",
};

// init firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
