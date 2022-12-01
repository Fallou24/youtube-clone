import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({setOpenMenu}) => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left">
          <p className="header__toggle" onClick={()=>setOpenMenu(true)}>
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
        <form>
          <input type="text" />
          <button>
            <i className="ri-search-line"></i>
          </button>
        </form>
        <div className="header__right">
          <NotificationsIcon />
          <AppsIcon />
          <span className="first__letter">F</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
