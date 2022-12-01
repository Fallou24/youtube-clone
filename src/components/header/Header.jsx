import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left">
          <p className="header__toggle">
            <i className="ri-menu-line"></i>
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
          <i className="ri-notification-2-fill"></i>
          <i className="ri-grid-fill"></i>
          <span className="first__letter">F</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
