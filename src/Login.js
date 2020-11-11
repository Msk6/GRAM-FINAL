import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login, resetErrors } from "./redux/actions";
import "./css/login/css/login.css";
import loginpic from "./css/login/images/loginpic.jpeg";
import logo from "./css/login/images/logo.png";
const Login = ({ login, user, errorMsg, resetErrors }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      if (errorMsg.length) resetErrors();
    };
  }, []);

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const { username, password } = userData;

  if (user) return <Redirect to="/cart/" />;

  const errors = errorMsg;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 login-section-wrapper">
          <div className="brand-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="login-wrapper my-auto">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className={`form-control ${
                    (errors.username || errors.non_field_errors) && "is-invalid"
                  }`}
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.username}</div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${
                    (errors.password || errors.non_field_errors) && "is-invalid"
                  }`}
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.password}</div>
                <div className="invalid-feedback">
                  {errors.non_field_errors}
                </div>
              </div>

              <button type="submit" className="btn btn-block login-btn">
                Login
              </button>
              <Link to="/signup" className="login-wrapper-footer-text">
                Don't have an account? Register here
              </Link>
            </form>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src={loginpic} alt="login image" class="login-img" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, errorMsg }) => ({ user, errorMsg });
const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
