import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./redux/actions";
import Logout from "./Logout";

const NavBar = ({ user, logout }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">ARTIC</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/products" className="nav-link">
              Products
          </Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <Link to="/profile/" className="nav-link">
                  profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart/" className="nav-link">
                  cart
                </Link>
              </li>
              <li onClick={() => logout()} className="nav-item">
                {/* <a className="nav-link">
                  logout
                  </a> */}
                <Link to="/login" className="nav-link">
                  Logout
                  </Link>
              </li>
            </>
          ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </li>
              </>
            )}
        </ul>
      </div>
    </nav>
  </>
);

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
