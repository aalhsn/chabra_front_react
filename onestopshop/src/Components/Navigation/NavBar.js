import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


// Components
import AuthButton from "./AuthButton";
import ProfileButton from "./ProfileButton";

import icon from "./logo-web.png";
const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav" id="mainNav">
      <Link className="navbar-brand" to="/">
        <img
          src={icon}
          style={{ width: "100px", height: "auto", paddingLeft: "20px" }}
        ></img>
        <h3>Chabra جبرة </h3>
      </Link>
      
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <AuthButton />
      <ProfileButton />
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps)(NavBar);
