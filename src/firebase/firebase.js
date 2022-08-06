import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDc4pq6jCU_tP8k53MgYXdmBdpnGI1sWgQ",
    authDomain: "umbrella-corp-c0a45.firebaseapp.com",
    projectId: "umbrella-corp-c0a45",
    storageBucket: "umbrella-corp-c0a45.appspot.com",
    messagingSenderId: "149323077989",
    appId: "1:149323077989:web:6277c0e7e8d3b288aca98c",
    measurementId: "G-DJEQED1E8P"
});

const auth = firebase.auth();

export { auth };
