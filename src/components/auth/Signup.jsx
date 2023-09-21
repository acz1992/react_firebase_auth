import React, { useState } from "react";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// create function that handles logic when form is submitted
	const signUp = (e) => {
		// prevents page from being reloaded when form submitted, so we dont lose Email and Password State
		e.preventDefault();
		// import function from firebase that helps with sign in functioinality
		// also include getAuth from firebase.js file
		createUserWithEmailAndPassword(auth, email, password)
			.then(
				// get back user credentials
				(userCredential) => {
					console.log(userCredential);
				}
			)
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="sign-up-container">
			<form onSubmit={signUp}>
				<h1>Create an Account</h1>
				<input
					type="email"
					placeholder="Enter your Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<input
					type="password"
					placeholder="Enter your Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
