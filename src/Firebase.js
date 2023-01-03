// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwvo1Q6Cnx-r_13bO1vcldDqVOzZv9DEE",
    authDomain: "clone-88f1b.firebaseapp.com",
    projectId: "clone-88f1b",
    storageBucket: "clone-88f1b.appspot.com",
    messagingSenderId: "944186638281",
    appId: "1:944186638281:web:acd31b6b060fa77307b218"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };