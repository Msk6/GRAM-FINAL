import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup, resetErrors } from "./redux/actions";
import { connect } from "react-redux";
import logo from "./css/login/images/logo.png";
import signuppic from "./css/login/images/signup.jpeg";

const Signup = ({ signup, user, errorMsg }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
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
    signup(userData);
  };

  const errors = errorMsg;

  const { username, first_name, last_name, email, password } = userData;
  if (user) return <Redirect to="/products/" />;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 login-section-wrapper">
          <div className="brand-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="login-wrapper my-auto">
            <h1 className="login-title">Signup</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className={`form-control ${errors.username && "is-invalid"}`}
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.username}</div>
              </div>
              <div className="form-group">
                <label htmlFor="first_name">First name:</label>
                <input
                  type="first_name"
                  className="form-control"
                  id="first_name"
                  value={first_name}
                  name="first_name"
                  placeholder="First name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last name:</label>
                <input
                  type="last_name"
                  className="form-control"
                  id="last_name"
                  value={last_name}
                  name="last_name"
                  placeholder="Last name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password && "is-invalid"}`}
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              <button type="submit" className="btn btn-block login-btn">
                Signup
              </button>
              <Link to="/login" className="login-wrapper-footer-text">
                already have an account?
              </Link>
            </form>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src={signuppic} alt="signup image" class="login-img" />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ user, errorMsg }) => ({ user, errorMsg });
const mapDispatchToProps = (dispatch) => ({
  signup: (userData) => dispatch(signup(userData)),
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
