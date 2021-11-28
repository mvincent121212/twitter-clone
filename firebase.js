// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKnLSog0iy1Vx4c4zy7elG7DQX4irMSQg",
    authDomain: "twitter-clone-fe46a.firebaseapp.com",
    projectId: "twitter-clone-fe46a",
    storageBucket: "twitter-clone-fe46a.appspot.com",
    messagingSenderId: "329257235876",
    appId: "1:329257235876:web:51bef60364db4e981a7d31"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
