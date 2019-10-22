import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import Loading from "./Loading";
import Logout from "./Logout";

class Profile extends Component {
  genderString = gender => {
    if (gender === "F") return "Female";
    if (gender === "M") return "Male";
    return "";
  };

  render() {
    const user = this.props.user;
    const profile = this.props.profile;
    const loading = this.props.profileLoading;

    if (!user) return <Redirect to="/" />;

    if (user) {
      if (loading) {
        return <Loading />;
      } else {
        return (
          <div className="card col-6 mx-auto p-0" style={{ marginTop: "10%" }}>
            <p> Username: {profile.user.username}</p>
            <p> First Name: {profile.user.first_name} </p>
            <p> Last Name: {profile.user.last_name} </p>
            <p> Email: {profile.user.email} </p>
            <p> Age: {profile.age} </p>
            <p> Gender: {this.genderString(profile.gender)} </p>
            <p> Phone: {profile.phone} </p>
            <Link to="/order-history">
              <button className="btn btn-block btn-info">Order History</button>
            </Link>
            <br />
            <Link to="/edit-profile">
              <button className="btn btn-block btn-warning">
                Edit Profile
              </button>
            </Link>

            <br />
            <Logout />
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
  profileLoading: state.authReducer.profileLoading
});

export default connect(mapStateToProps)(Profile);
