import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Components
import AuthButton from "./AuthButton";

import icon from "./logo-web.png";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav" id="mainNav">
      <Link
        style={{
          textDecoration: "none"
        }}
        className="logo-text"
        to="/"
      >
        <div className="row">
          <img
            src={icon}
            style={{
              width: "70px",
              height: "auto",
              paddingLeft: "20px"
            }}
          ></img>
          <h3
            id="logo-text-2"
            style={{
              textDecoration: "none",
              paddingLeft: "10px",
              paddingTop: "5px"
            }}
          >
            Chabra
          </h3>
        </div>
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
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps)(NavBar);
