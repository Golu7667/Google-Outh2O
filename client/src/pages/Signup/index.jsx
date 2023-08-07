import {Link} from "react-router-dom";
import './index.css'

function Signup() {
	const googleAuth = () => {
		window.open(
			`https://googleoauth2o.onrender.com/auth/google/callback`,
			"_self"
		);
	};
	return (
		<>
			<h1 className="heading">Sign up Form</h1>
			<div className="form_container">
				<div className="left">
					<img className="img" src="./images/signup.jpg" alt="signup" />
				</div>
				<div className="right">
					<h2 className="from_heading">Create Account</h2>
					<button className="google_btn" onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing up with Google</span>
					</button>
					<p className="text">
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
			</>
	);
	}

export default Signup;
