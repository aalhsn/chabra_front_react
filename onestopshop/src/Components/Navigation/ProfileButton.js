import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "../Logout"
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignOutAlt,
    faSignInAlt,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const ProfileButton = ({ user }) => {

    // let buttons = [


    // ];

    if (user) {
        return (
            <>
                {/* Dear Anfal Fix the Link */}
                <li key="loginButton" className="nav-item">
                    <Link to="/login" className="nav-link nav">
                        <FontAwesomeIcon icon={faSignInAlt} /> {user.username}'s  Profile
      </Link>
                </li >



            </>
        )
    }

    {/* return <ul className="navbar-nav ml-auto">{buttons}</ul>; */ }
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(ProfileButton);