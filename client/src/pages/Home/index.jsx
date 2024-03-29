import React from 'react'
import './index.css'

function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`https://googleoauth2o.onrender.com/auth/logout`, "_self");
	};
	return (
		<>
			<h1 className="heading">Home</h1>
			<div className="form_container">
				<div className="left">
					<img className="img" src="./images/profile.jpg" alt="login" />
				</div>
				<div className="right">
					<h2 className="from_heading">Profile</h2>
					<img
						src={user.picture}
						alt="profile"
						className="profile_img"
					/>
					<input
						type="text"
						defaultValue={user.name}
						className="input"
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className="input"
						placeholder="Email"
					/>
					<button className="btn" onClick={logout}>
						Log Out
					</button>
				</div>
			</div>
			</>
	);
}

export default Home;
