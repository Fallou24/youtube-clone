import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { useRef } from "react";

const Sidebar = ({ setOpenMenu, openMenu }) => {
  const ref = useRef();
  const handleClose = (e) => {
    if (!ref.current.contains(e.target)) {
      setOpenMenu(false);
    } else {
      return false;
    }
  };
  return (
    <div
      className={openMenu ? "sidebar visible" : "sidebar"}
      onClick={handleClose}
    >
      <div className="sidebar__container" ref={ref}>
        <div className="sidebar__top">
          <p className="header__toggle" onClick={() => setOpenMenu(false)}>
            <MenuIcon />
          </p>
          <Link to="/" className="header__logo">
            <img
              src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
              alt=""
              className="header__logo"
            />
            <span>YouTube</span>
          </Link>
        </div>
        <div className="sidebar__icons">
          <Link to="/">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link to="/subscriptions">
            <SubscriptionsIcon />
            <span>Subscriptions</span>
          </Link>
          <Link to="/likedVideos">
            <ThumbUpIcon />
            <span>Liked videos</span>
          </Link>
          <button>
            <LogoutIcon />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
