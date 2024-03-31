import React from "react";
import "./signup.css";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import { FaGithub } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import Logo from "../../assets/images/base-logo2.png";

const SignUp = () => {
  return (
    <div className="form-wrapper">
      <div className="form-design">
        <div className="form-design-container">
          <img className="form-design-logo" src={Logo} />
          <h1 className="form-design-title">Base</h1>
          <div className="form-design-icons">
            <FaGithub />
            <AiFillTwitterCircle />
            <FaLinkedin />
            <IoLogoDiscord />
          </div>
        </div>
      </div>
      <div className="form-side">
        <form className="my-form">
          <div className="form-welcome-row">
            <h1 className="sign-in-title">Sign In</h1>
            <p className="sign-in-desc">Sign in to your account.</p>
            <div className="socials-row">
              <a href="#" title="Use Google">
                <img src={google} alt="Google" /> Sign in with Google
              </a>
              <a href="#" title="Use Apple">
                <img src={apple} alt="Apple" /> Sign in with Apple
              </a>
            </div>
            <div className="sign-in-bottom">
              <div className="text-field">
                <label for="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="text-field">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  title="minimum 6 characters at least 1 Alphabet and 1 Number"
                  required
                />
              </div>
              <a href="#" title="Create Account" className="sign-in-links">
                Forgot Password?
              </a>
              <button type="submit" className="my-form__button">
                Sign In
              </button>
            </div>
            <div className="my-form__actions">
              <label>
                Don't have an account?
                <a href="#" title="Create Account" className="sign-in-links">
                  Register here
                </a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
