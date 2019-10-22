import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "../Logout";
import CartButton from "./CartButton";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user, profile }) => {
  let buttons = [
    <li key="loginButton" className="nav-item">
      <Link to="/login" className="nav-link nav">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
    </li>,
    <li key="signupButton" className="nav-item">
      <Link to="/signup" className="nav-link nav">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
    </li>
  ];

  if ((user, profile)) {
    buttons = (
      <>
        <span className="navbar-text">Welcome, {profile.user.username}</span>
        <li key="profileButton" className="nav-item">
          <Link to="/profile" className="nav-link nav">
            Profile
          </Link>
        </li>

        <Logout />
      </>
    );
  }

  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile
});

export default connect(mapStateToProps)(AuthButton);
