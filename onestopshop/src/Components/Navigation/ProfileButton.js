import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "../Logout";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const ProfileButton = ({ user }) => {
  // let buttons = [

  if (user) {
    return (
      <>
        <li key="profileButton" className="nav-item">
          <Link to="/profile" className="nav-link nav">
            Profile
          </Link>
        </li>
      </>
    );
  } else {
    return <></>;
  }

  {
    /* return <ul className="navbar-nav ml-auto">{buttons}</ul>; */
  }
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps)(ProfileButton);
