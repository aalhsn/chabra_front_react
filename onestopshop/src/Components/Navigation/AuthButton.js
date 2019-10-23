import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "../Logout";
import CartButton from "./CartButton";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user, profile }) => {
  let buttons = [
    <li key="loginButton" className="nav-item">
      <Link id="nav-link" to="/login" className="nav-link nav">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
    </li>,
    <li key="signupButton" className="nav-item">
      <Link id="nav-link" to="/signup" className="nav-link nav">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
    </li>
  ];

  if ((user, profile)) {
    buttons = (
      <>
        <li id="nav-link" key="profileButton" className="nav-item">
          <Link id="nav-link" to="/profile" className="nav-link nav">
            {profile.user.username}'s Profile
          </Link>
          <Logout />
        </li>
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
