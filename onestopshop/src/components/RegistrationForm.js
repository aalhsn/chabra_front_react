import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

class RegistationForm extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.signup(this.state, this.props.history);
  };

  handleUsernameError = () => {
    if (this.props.errors) {
      if (this.props.errors.username[0]) {
        return this.props.errors.username[0];
      }
    }
  };

  // handlePasswordError = () => {
  //   if (this.props.errors) {
  //     if (this.props.errors.password[0]) {
  //       return this.props.errors.password[0]
  //     }
  //   }
  // }

  render() {
    const type = this.props.match.url.substring(1);
    console.log(this.props.errors);

    if (this.props.user) return <Redirect to="/" />;

    const errors = this.props.errors;

    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">Register an account</h5>
          <form onSubmit={this.submitHandler}>
            {!!errors.length && (
              <div className="alert alert-danger" role="alert">
                {errors.map(error => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                id="input"
                onChange={this.changeHandler}
              />

              {/* {this.props.errors ? this.props.errors.username[0] : ""} */}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                id="input"
                onChange={this.changeHandler}
              />

              {/* {this.props.errors ? this.props.errors.password[0] : ""} */}
              {/* {this.handlePasswordError()} */}
            </div>
            <input
              id="registerbtn"
              className="btn btn-primary btn-block"
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />
          </form>
        </div>
        <div className="card-footer">
          <Link to="/login" className="btn btn-small btn-link">
            Already have an account? Login
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.errors,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistationForm);
