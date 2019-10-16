import React, { Component } from "react";
import { connect } from "react-redux";


class Profile extends Component {
  render() {
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <h1>Profile</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile
});


export default connect(mapStateToProps)(Profile);
