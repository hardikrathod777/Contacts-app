// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZK1yK_7ZqxxGjZ2qN0ahcdZs6kFQ7sdM",
    authDomain: "my-contacts-257ca.firebaseapp.com",
    projectId: "my-contacts-257ca",
    storageBucket: "my-contacts-257ca.appspot.com",
    messagingSenderId: "121507435032",
    appId: "1:121507435032:web:db25af5ed1eac2b5d1a96d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const usersCollectionRef = collection(db, "users");