import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="spotify-footer">
      <div className="footer-content">
        <div className="footer-text">
          <h4>Preview of Spotify</h4>
          <p>
            Sign up to get unlimited songs and podcasts with occasional ads.
            No credit card needed.
          </p>
        </div>

        <button className="signup-btn">
          Sign up free
        </button>
      </div>
    </footer>
  );
};

export default Footer
