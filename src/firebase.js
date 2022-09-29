import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAvDhfyfMccPS9vkWP-hM48BRPaEIIS1mQ",
    authDomain: "facebook-clone-43104.firebaseapp.com",
    databaseURL: "https://fb-clone-7e4ca-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "facebook-clone-43104",
    storageBucket: "facebook-clone-43104.appspot.com",
    messagingSenderId: "11399034579",
    appId: "1:11399034579:web:6291d8fbdfa272acbc8626",
    measurementId: "G-GFXN70Y685"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };