// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6T_rHY18rgwgNuD1x26e6DPT_Bhw0Sqk",
  authDomain: "netflixgpt-cae54.firebaseapp.com",
  projectId: "netflixgpt-cae54",
  storageBucket: "netflixgpt-cae54.firebasestorage.app",
  messagingSenderId: "693500374983",
  appId: "1:693500374983:web:ec2824449eb844dbd873e2",
  measurementId: "G-J6KQ819MRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);