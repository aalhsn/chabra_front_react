import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import Loading from "./Loading";

class EditProfile extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    gender: null,
    age: null,
    image: null
  };

  componentDidMount() {
    if (this.props.user) {
      const profile = this.props.profile;
      this.setState({
        first_name: profile.user.first_name,
        last_name: profile.user.last_name,
        email: profile.user.email,
        phone: profile.phone,
        gender: profile.gender,
        age: profile.age,
        image: profile.image
      });
    }
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.editProfile(this.state, this.props.history);
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  genderString = gender => {
    if (gender === "F") return "Female";
    if (gender === "M") return "Male";
    return "";
  };

  render() {
    const profile = this.props.profile;
    const user = this.props.user;
    const errors = this.props.errors;
    const loading = this.props.profileLoading;

    if (!user) return <Redirect to="/" />;

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="card col-6 mx-auto p-0" style={{ marginTop: "10%" }}>
          <form onSubmit={this.submitHandler}>
            {!!errors.length && (
              <div className="alert alert-danger" role="alert">
                {errors.map(error => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}

            <p> First Name: {profile.user.first_name}</p>
            <input
              placeholder={profile.user.first_name}
              onChange={this.changeHandler}
              name="first_name"
              value={this.state.first_name}
            />
            <br />
            <p> Last Name: {profile.user.last_name}</p>
            <input
              placeholder={profile.user.last_name}
              onChange={this.changeHandler}
              name="last_name"
              value={this.state.last_name}
            />
            <br />
            <p> email: {profile.user.email}</p>
            <input
              placeholder={profile.user.email}
              onChange={this.changeHandler}
              name="email"
              value={this.state.email}
            />
            <br />
            <p> phone: {profile.user.phone}</p>
            <input
              placeholder={profile.user.phone}
              onChange={this.changeHandler}
              name="phone"
              value={this.state.phone}
            />
            <br />
            <p> Gender: {this.genderString(profile.gender)}</p>
            <input
              placeholder={this.genderString(profile.gender)}
              onChange={this.changeHandler}
              name="gender"
            />

            <select
              value={this.genderString(this.state.gender)}
              onChange={this.changeHandler}
              name="gender"
            >
              <option>F</option>
              <option> M</option>
            </select>
            <br />
            <p> Age: {profile.user.age}</p>
            <input
              placeholder={profile.user.age}
              onChange={this.changeHandler}
              name="age"
              value={this.state.age}
            />
            <br />

            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Update Profile"
            />
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  errors: state.errors.errors,
  profile: state.authReducer.profile,
  profileLoading: state.authReducer.profileLoading
});

const mapDispatchToProps = dispatch => {
  return {
    editProfile: (userDate, history) =>
      dispatch(actionCreators.editProfile(userDate, history)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
