import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";

class Profile extends Component {
  // componentDidMount() {
  //   this.props.fetchProfile();
  // }

  render() {
    const profile = this.props.profile;

    console.log(profile);
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        {/* <h1>{profile}</h1> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
