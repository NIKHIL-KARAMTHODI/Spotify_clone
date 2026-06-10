import React from "react";
import "./Navbar.css";
import {
  FaSpotify,
  FaHome,
  FaSearch,
  FaDownload
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="icon-circle spotify">
          <FaSpotify />
        </div>

        <div className="icon-circle home">
          <FaHome />
        </div>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to play?"
          />
          <div className="library-icon">▣</div>
        </div>
      </div>

      <div className="navbar-right">
        <a href="/">Premium</a>
        <a href="/">Support</a>
        <a href="/">Download</a>

        <span className="divider"></span>

        <button className="install-btn">
          <FaDownload />
          Install App
        </button>

        <a href="/" className="signup">
          Sign up
        </a>

        <button className="login-btn">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
