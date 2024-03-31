import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { useLocation } from "react-router-dom";
import SideBarItem from "./sidebar-item";
import logo from "../../assets/images/base-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function SideBar() {
  const sidebar_menu = [
    {
      id: 1,
      icon: "bx bxs-dashboard",
      path: "/",
      title: "Dashboard",
    },
    {
      id: 2,
      icon: "bx bxs-bar-chart-square",
      path: "/upload",
      title: "Upload",
    },
    {
      id: 3,
      icon: "bx bxs-receipt",
      path: "/invoice",
      title: "Invoice",
    },
    {
      id: 4,
      icon: "bx bx-list-check",
      path: "/schedule",
      title: "Schedule",
    },
    {
      id: 5,
      icon: "bx bxs-calendar",
      path: "/calender",
      title: "Calender",
    },
    {
      id: 6,
      icon: "bx bxs-bell",
      path: "/notification",
      title: "Notification",
    },
    {
      id: 7,
      icon: "bx bxs-cog",
      path: "/settings",
      title: "Settings",
    },
  ];

  const location = useLocation();

  const [active, setActive] = useState(1);
  const [navBarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navBarActive);
  };

  useEffect(() => {
    sidebar_menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className={navBarActive ? "sidebar active" : "sidebar"}>
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <img src={logo} className="sidebar-logo" alt="logo" />
          <h2>Base </h2>

          <IoMdClose className="close-icon" onClick={toggleNavbar}/>
          <GiHamburgerMenu className="menu-toggle-icon" onClick={toggleNavbar}/>
        </div>

        <div className="sidebar-container">
          <div className="sidebar-items">
            {sidebar_menu.map((item, index) => (
              <div key={index} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
