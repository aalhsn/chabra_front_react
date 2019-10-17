import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";
import instance from "../redux/actions/instance";

class Profile extends Component {
  state = {
    profile: null
  };
  getData = async () => {
    const url = "https://chabra.herokuapp.com/api/profile/";
    let token = localStorage.getItem("token");
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(res => res.json());
    return res;
  };
  componentDidMount() {
    this.getData().then(result =>
      this.setState({
        profile: result
      })
    );
  }

  render() {
    if (!this.props.user) return <Redirect to="/" />;
    if (this.state.profile) {
      console.log("profile  ", this.state.profile.id);
    }

    const profile = this.props.profile;
    const user = this.props.user;
    const loading = this.props.profileLoading;

    if (user) {
      if (loading) {
        return <Loading />;
      } else {
        return (
          <>
            <div className="card col-6 mx-auto p-0 mt-5">
              <h1>{profile.user.username}</h1>
            </div>
          </>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => dispatch(actionCreators.profile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
