import "./Login.css";
import { auth } from "./firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profilePic: userAuth.user.photoURL,
					}),
				);
			})
			.catch((error) => alert(error));
	};
	const register = () => {
		if (!name) {
			return alert("Please Enter your name");
		}
		auth.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic,
							}),
						);
					});
			})
			.catch((error) => {
				alert(error);
			});
	};
	return (
		<div className="login">
			<img
				src="https://user-images.githubusercontent.com/54361799/126155844-cbe905db-b62f-4a81-9cc3-600ecae287e7.png"
				alt="Linkedin"
			/>
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Full name (required)"
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					type="text"
					placeholder="Profile Picture URL (optional)"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>

				<button type="submit" onClick={(e) => loginToApp(e)}>
					Sign In
				</button>
			</form>
			<p>
				Not a member? {"    "}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
};

export default Login;
