import { Link } from "react-router-dom";
import './index.css'

function Login() {
	const googleAuth = () => {
		window.open(
			`https://googleoauth2o.onrender.com/auth/google/callback`,
			"_self"
		);
	};
	return (
		<>
			<h1 className="heading">Log in Form</h1>
			<div className="form_container">
				<div className="left">
					<img className="img" src="./images/login.jpg" alt="login" />
				</div>
				<div className="right">
					<h2 className="from_heading">Members Log in</h2>
					<button className="google_btn" onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing in with Google</span>
					</button>
					<p className="text">
						New Here ? <Link to="/signup">Sing Up</Link>
					</p>
				</div>
			</div>
			</>
	);
}

export default Login;
 