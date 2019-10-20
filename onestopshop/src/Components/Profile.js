import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import Loading from "./Loading";
import Logout from "./Logout";

class Profile extends Component {

  componentDidMount() {
    this.props.fetchProfile();
  }

  genderString = gender => {
    if (gender === "F") return "Female";
    if (gender === "M") return "Male";
    return "";
  };

  render() {
    const user = this.props.user;
    const profile = this.props.profile;
    const loading = this.props.loading;

    if (!user) return <Redirect to="/" />;

    if (user) {
      if (!loading) {
        return <Loading />;
      } else {
        console.log("hi", profile.user);
        return (
          <div className="card col-6 mx-auto p-0" style={{ marginTop: "10%" }}>
            <img
              src={`http://chabra.herokuapp.com${profile.image}`}
              height="42"
              width="42"
            ></img>
            <p> Username: </p>
            <p> First Name: </p>
            <p> Last Name: </p>
            <p> Age: {profile.age} </p>
            <p> Gender: {this.genderString(profile.gender)} </p>
            <p> Phone: {profile.phone} </p>
            <Link to="/order-history">
              <button className="btn btn-block btn-info">Order History</button>
            </Link>
            <br/>
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
  loading: state.profileReducer.loading
});



const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(actionCreators.profile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

