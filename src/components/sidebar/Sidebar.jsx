import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar__icons sidebar__left">
      <NavLink to="/">
        <HomeIcon />
      </NavLink>
      <NavLink to="/subscriptions">
        <SubscriptionsIcon />
      </NavLink>
      <NavLink to="/likedVideos">
        <ThumbUpIcon />
      </NavLink>
      <button>
        <LogoutIcon />
      </button>
    </div>
  );
};

export default Sidebar;
