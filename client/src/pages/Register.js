import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

import signinImage from "../assets/signup.jpg";

export default function Register() {
  const handleChange = () => {};

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          {/* <img src={signinImage} alt="" /> */}
          <p>Sign up</p>
          <form onSubmit={() => {}}>
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
          </form>
          <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
            <p>Already have an account? </p>
            <p><Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
