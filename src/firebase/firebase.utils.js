import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtjdxForezOvSqiOhc8ayO8HjQxX1zkyY",
    authDomain: "crown-db-a28ca.firebaseapp.com",
    projectId: "crown-db-a28ca",
    storageBucket: "crown-db-a28ca.appspot.com",
    messagingSenderId: "575103486604",
    appId: "1:575103486604:web:e436d8a82d6238bb3c09a9",
    measurementId: "G-WNL893F487"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;