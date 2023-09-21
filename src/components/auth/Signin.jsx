import React, { useState } from "react";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// create function that handles logic when form is submitted
	const signIn = (e) => {
		// prevents page from being reloaded when form submitted, so we dont lose Email and Password State
		e.preventDefault();
		// import function from firebase that helps with sign in functioinality
		// also include getAuth from firebase.js file
		signInWithEmailAndPassword(auth, email, password)
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
		<div className="sign-in-container">
			<form onSubmit={signIn}>
				<h1>Log In to your Account</h1>
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
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};

export default SignIn;
