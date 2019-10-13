import * as actionCreators from "../redux/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

class Logout extends Component {
  getView = () => {
    if (this.props.user) {
      return (
        <button
          id="logout"
          className="nav-item"
          onClick={() => this.props.logout()}
        >
          Logout
        </button>
      );
    } else {
      return (
        <div>
          <Link to="/signup" className="nav-link nav">
            <button
              id="signup"
              className="nav-item"
              onClick={() => this.props.signup()}
            >
              Signup
            </button>
          </Link>

          <Link to="/login" className="nav-link nav">
            <button id="login" className="nav-item">
              Login
            </button>
          </Link>
        </div>
      );
    }
  };

  render() {
    return <div>{this.getView()}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout()),
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history)),
    login: (userData, history) =>
      dispatch(actionCreators.login(userData, history))
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
