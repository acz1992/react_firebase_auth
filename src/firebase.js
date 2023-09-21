// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAuXpq9-fS7Iq2L2OWd83H8vwGv47i5wb4",
	authDomain: "react-auth-tutorial-5d091.firebaseapp.com",
	projectId: "react-auth-tutorial-5d091",
	storageBucket: "react-auth-tutorial-5d091.appspot.com",
	messagingSenderId: "220325013438",
	appId: "1:220325013438:web:185daf52df1365d0bcbbef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
