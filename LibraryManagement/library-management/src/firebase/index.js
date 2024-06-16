import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqj0RY8aB3Cgs3n8CS2adAG-NwAON5yz8",
  authDomain: "my-library-app-88533.firebaseapp.com",
  projectId: "my-library-app-88533",
  storageBucket: "my-library-app-88533.appspot.com",
  messagingSenderId: "1042027309654",
  appId: "1:1042027309654:web:001c96f908bdbc22f029f7",
  measurementId: "G-BX9RCGFN9P"
};

const app=initializeApp(firebaseConfig);

let db=getFirestore(app);
let auth=getAuth(app);
let storage = getStorage(app);

export {db,auth,storage};

