import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class Profile extends Component {

  
  
 
  
  
  render() {
    if (!this.props.user) return <Redirect to="/" />;
    return (
      <div className="card col-6 mx-auto p-0" style={{ marginTop: "10%" }}>
        <h1>Profile</h1>
        <br />
        <div className="row">
          <div className="col-sm-12  col-md-6">
            <Link to="/order-history">
              <button className="btn btn-block btn-info">Order History</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
});




export default connect(mapStateToProps)(Profile);

