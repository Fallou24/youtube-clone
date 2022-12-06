import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { logout } from "../../firebase/firebase";


const SidebarModal = ({ setOpenMenu, openMenu }) => {
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
          <NavLink to="/" className="header__logo">
            <img
              src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
              alt=""
              className="header__logo"
            />
            <span>YouTube</span>
          </NavLink>
        </div>
        <div className="sidebar__icons">
          <NavLink to="/" onClick={()=>setOpenMenu(false)}>
            <HomeIcon />
            <span>Home</span>
          </NavLink>

          <NavLink to="/subscriptions" onClick={()=>setOpenMenu(false)}>
            <SubscriptionsIcon />
            <span>Subscriptions</span>
          </NavLink>
          <NavLink to="/likedVideos" onClick={()=>setOpenMenu(false)}>
            <ThumbUpIcon />
            <span>Liked videos</span>
          </NavLink>
          <button onClick={logout}>
            <LogoutIcon />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarModal;
