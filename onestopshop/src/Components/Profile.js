import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import Loading from "./Loading";
import Logout from "./Logout";
import { Table } from "react-bootstrap";

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
        console.log("profile addresses", profile.addresses)
        const userAdresses = profile.addresses;
        let Adresses = [];
        if (userAdresses) {

          Adresses = userAdresses.map(adress => (
            <tr>
              <td>{adress.area}</td>
              <td>{adress.street}</td>
              <td>{adress.block}</td>
              <td>{adress.optional}</td>
            </tr>

          ));
        }
        console.log("userAdresses", userAdresses)

        return (
          <div className="card col-6 mx-auto p-0" style={{ marginTop: "10%" }}>
            <p> Username: {profile.user.username}</p>
            <p> First Name: {profile.user.first_name} </p>
            <p> Last Name: {profile.user.last_name} </p>
            <p> Email: {profile.user.email} </p>
            <p> Age: {profile.age} </p>
            <p> Gender: {this.genderString(profile.gender)} </p>
            <p> Phone: {profile.phone} </p>
            <Table striped bordered hover variant="dark">

              <thead>
                <tr>
                  <th>area</th>
                  <th>street</th>
                  <th>block</th>
                  <th>optional</th>
                </tr>
              </thead>
              <tbody>

                {Adresses}

              </tbody>
            </Table>

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
