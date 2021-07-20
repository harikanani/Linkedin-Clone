import firebase from "firebase";
var firebaseConfig = {
	apiKey: "AIzaSyCgLHD9KL7syWGSRaAWRe54b3ANI9gm8bM",
	authDomain: "linkedin-clone-709e0.firebaseapp.com",
	projectId: "linkedin-clone-709e0",
	storageBucket: "linkedin-clone-709e0.appspot.com",
	messagingSenderId: "1049344189527",
	appId: "1:1049344189527:web:a963586126ad2c91e06f12",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// connection to firestore database
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
