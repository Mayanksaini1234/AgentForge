
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "agentforge-4648d.firebaseapp.com",
  projectId: "agentforge-4648d",
  storageBucket: "agentforge-4648d.firebasestorage.app",
  messagingSenderId: "689129649170",
  appId: "1:689129649170:web:dbf9c7b69742fe6d2dd4cb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}