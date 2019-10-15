import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./Logout";

class Welcome extends Component {
  render() {
    return <Logout />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(Welcome);
