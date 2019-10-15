import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { logout } from "../redux/actions/authentication";

class Logout extends Component {
  render() {
    const logout = () => {
      return (
        <button danger onClick={this.props.logout}>
          Logout
        </button>
      );
    };

    const login = () => {
      return (
        <Link to="/login">
          <button id="login" className="btn btn-primary">
            Login
          </button>
        </Link>
      );
    };

    return <>{this.props.user ? logout() : login()}</>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
