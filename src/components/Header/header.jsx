import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import Logo from "../../assets/images/base-logo.png";

function Header() {
  return (
    <>
      <div className="dashbord-header-container">
        <div className="dashboard-title">
          <img src={Logo} className="sidebar-logo" alt="Logo" />
          <h2 className="web-title">Base</h2>
        </div>
        <div className="dashbord-header-right">
          <IoIosNotificationsOutline className="notification-icon" />
          <Link to="/signup">
            <img
              className="dashbord-header-avatar"
              src="https://reqres.in/img/faces/9-image.jpg"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
