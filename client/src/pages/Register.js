import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

import signinImage from "../assets/signup.jpg";

export default function Register() {
  return (
    <div className="auth__form-container">
      <div className="auth__form-container__fields">
        <div className="auth__form-container__fields-content">
          <img src={signinImage} alt="" />
          <p>Sign up</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
