import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/Signup";
import AuthDetails from "./components/auth/authdetails";

function App() {
	return (
		<div className="App">
			<SignIn />
			<SignUp />
			<AuthDetails />
		</div>
	);
}

export default App;
