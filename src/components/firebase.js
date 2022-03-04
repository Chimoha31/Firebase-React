// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk3mcFW0lMZB9tDkxTLtNdlv6ccBc6bCk",
  authDomain: "fir-react-tutorial-basic.firebaseapp.com",
  projectId: "fir-react-tutorial-basic",
  storageBucket: "fir-react-tutorial-basic.appspot.com",
  messagingSenderId: "763519950336",
  appId: "1:763519950336:web:20e7c68b7f698e2e83c2e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;