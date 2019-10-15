import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Components
import AuthButton from "./AuthButton";
import icon from "./logo-web.png";
const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav" id="mainNav">
      <Link className="navbar-brand" to="/welcome">
        <img
          src={icon}
          style={{ width: "200px", height: "60px", paddingLeft: "20px" }}
          alt=""
        ></img>
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
  user: state.user
});

export default connect(mapStateToProps)(NavBar);
