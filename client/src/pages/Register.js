import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

import signinImage from "../assets/signup.jpg";

const initialState = {
  fullname: "",
  username: "",
  password: "",
  phoneNumber: "",
  avatarURL: "",
  confirmPassword: "",
};

export default function Register() {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          {/* <img src={signinImage} alt="" /> */}
          <p>Sign up</p>
          <form onSubmit={handleSubmit}>
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                name="fullname"
                placeholder="fullname"
                onChange={handleChange}
                required
              />
            </div>
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
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="phone number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="avatarURL">Avatar URL</label>
              <input
                type="text"
                name="avatarURL"
                placeholder="choose avatar"
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
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="auth__form-container_fields-content_button">
              <button>Register</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>Already have an account? </p>
            <span>
              <Link to="/login">Login</Link>
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
