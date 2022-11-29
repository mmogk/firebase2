// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3-OuldOr-j-EKMReEu0nJ4-aDzivpoTo",
  authDomain: "fir-1-80c5b.firebaseapp.com",
  projectId: "fir-1-80c5b",
  storageBucket: "fir-1-80c5b.appspot.com",
  messagingSenderId: "331518143491",
  appId: "1:331518143491:web:1dd0f564452ae38bbfb236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);