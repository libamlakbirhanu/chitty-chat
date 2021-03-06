import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

import signinImage from '../assets/signup.jpg';

const initialState = {
	username: '',
	password: '',
};
const cookies = new Cookies();

export default function Register() {
	const [form, setForm] = useState(initialState);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}register`,
			{
				...form,
			}
		);

		cookies.set('token', data.token);
		cookies.set('username', data.username);
		cookies.set('fullname', data.fullname);
		cookies.set('userID', data.userID);
	};

	return (
		<div className="auth__form-container">
			<div className="auth__form-container_fields">
				<div className="auth__form-container_fields-content">
					<p>Sign in</p>
					<form onSubmit={handleSubmit}>
						<div className="auth__form-container_fields-content_input">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								name="username"
								placeholder="username"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="auth__form-container_fields-content_input">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="auth__form-container_fields-content_button">
							<button>Login</button>
						</div>
					</form>
					<div className="auth__form-container_fields-account">
						<p>Don't have an account? </p>
						<span>
							<Link to="/register">Register</Link>
						</span>
					</div>
				</div>
			</div>
			<div className="auth__form-container_image">
				<img src={signinImage} alt="sign in" />
			</div>
		</div>
	);
}
