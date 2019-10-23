import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import Loading from "./Loading";

class EditProfile extends Component {
  state = {
    username: this.props.profile.user.username,
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    gender: null,
    age: null,
    image: null,
    addresses:this.props.profile.addresses
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

  genderStringSwap = gender => {
    if (gender === "Female") return "F";
    if (gender === "Male") return "M";
    return "";
  };

  submitHandler = e => {
    e.preventDefault();
    
    this.props.editProfile(this.state, this.props.history);
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    if(e.target.name === 'gender'){
      this.setState({ gender: this.genderStringSwap(e.target.value)})
    }
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
        <div
          id="update-profile"
          className="card col-6 mx-auto p-0"
          style={{ marginTop: "10%" }}
        >
          <form id="update-profile" onSubmit={this.submitHandler}>
            {!!errors.length && (
              <div className="alert alert-danger" role="alert">
                {errors.map(error => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}

            <p>
              {" "}
              <b>First Name: </b> {profile.user.first_name}
            </p>
            <input
              className="form-control rounded-pill"
              placeholder={profile.user.first_name}
              onChange={this.changeHandler}
              name="first_name"
              value={this.state.first_name}
            />
            <br />
            <p>
              {" "}
              <b>Last Name: </b>
              {profile.user.last_name}
            </p>
            <input
              className="form-control rounded-pill"
              placeholder={profile.user.last_name}
              onChange={this.changeHandler}
              name="last_name"
              value={this.state.last_name}
            />
            <br />
            <p>
              {" "}
              <b>Email: </b> {profile.user.email}
            </p>
            <input
              className="form-control rounded-pill"
              placeholder={profile.user.email}
              onChange={this.changeHandler}
              name="email"
              type="email"
              value={this.state.email}
            />
            <br />
            <p>
              {" "}
              <b>Phone: </b> {profile.user.phone}
            </p>
            <input
              className="form-control rounded-pill"
              placeholder={profile.phone}
              onChange={this.changeHandler}
              name="phone"
              type="phone"
              value={this.state.phone}
            />
            <br />
            <div class="form-group rounded-pill">
                    <label for="exampleFormControlSelect1">Gender:</label>
                    <select name="gender" onChange={this.changeHandler} class="form-control" id="exampleFormControlSelect1">
                    <option>choose gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    </select>
                  </div>
            <br />
            <p>
              {" "}
              <b>Age: </b>
              {profile.age}
            </p>
            <input
              className="form-control rounded-pill"
              placeholder={profile.user.age}
              onChange={this.changeHandler}
              name="age"
              value={this.state.age}
            />
            <br />

            <input
              id="registerbtn"
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
