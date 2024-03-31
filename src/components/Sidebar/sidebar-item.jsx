import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

const SideBarItem = ({ item, active }) => {
  return (
    <Link
      to={item.path}
      className={active ? "sidebar-item-active" : "sidebar-item"}
    >
      <i className={`${item.icon}`} alt="logo"></i>

      <span className="sidebar-item-label">{item.title}</span>
    </Link>
  );
};
export default SideBarItem;
