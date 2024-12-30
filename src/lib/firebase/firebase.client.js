// Import the functions you need from the SDKs you need
import { initializeApp, getApps, deleteApp, getApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase

// SvelteKit can sometimes initialize Firebase improperly,
// requiring reinitialization of the Firebase instance.

let firebaseApp; //Creates firebaseApp variable
if (!getApps().length) { //If the array is empty...
    firebaseApp = initializeApp(firebaseConfig) //Start the Firebase instance
} else {
    firebaseApp = getApp() //Get the faulty instance
    deleteApp(firebaseApp) //Delete the instance
    firebaseApp = initializeApp(firebaseConfig) //Start the instance properly
}

export const auth = getAuth(firebaseApp) //Returns auth instance for other apps to use