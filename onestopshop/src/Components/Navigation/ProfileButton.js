import React from "react";
import { Link } from "react-router-dom";


const ProfileButton = ({ user }) => {
    return (
      
        <li key="profileButton" className="nav-item">
          <Link to="/profile" className="nav-link nav">
            Profile
          </Link>
        </li>
      
    );
  } 
  


export default (ProfileButton);
