import firebase from "firebase/compat/app";
import {getFirestore} from  "firebase/firestore"
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD6unZ2bGmse4W8JpsmdyTIR6EyLeDSRwg",
    authDomain: "whatsapp-v2-5fd0f.firebaseapp.com",
    projectId: "whatsapp-v2-5fd0f",
    storageBucket: "whatsapp-v2-5fd0f.appspot.com",
    messagingSenderId: "358101139299",
    appId: "1:358101139299:web:9e0f36ab3f475c60541d56"
};

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = getFirestore();
const auth = getAuth();

const provider = new GoogleAuthProvider();

export {db , auth , provider};