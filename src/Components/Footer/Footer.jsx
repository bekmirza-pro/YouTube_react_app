import React from "react";
import "./Footer.scss";

import { NavLink } from "react-router-dom";

import Home from "../../Assets/Images/home.png";
import Trending from "../../Assets/Images/ui.png";
import Subscribe from "../../Assets/Images/subscribe.png";
import Library from "../../Assets/Images/documents.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_box">
        <div className="footer-link">
          <NavLink className="name_link" to="/">
            {" "}
            <div className="footer-link">
              <img className="link-img" src={Home} alt="Home" />
              <span className="name_link">Home</span>
            </div>
          </NavLink>{" "}
        </div>
        <div className="footer-link">
          <NavLink className="name_link" to="/">
            {" "}
            <div className="footer-link">
              <img className="link-img" src={Trending} alt="Home" />
              <span className="name_link"> Trending </span>
            </div>
          </NavLink>{" "}
        </div>
        <div className="footer-link">
          <NavLink className="name_link" to="/">
            {" "}
            <div className="footer-link">
              <img className="link-img" src={Subscribe} alt="Home" />
              <span className="name_link">Subscriptions</span>
            </div>
          </NavLink>{" "}
        </div>
        <div className="footer-link">
          <NavLink className="name_link" to="/">
            {" "}
            <div className="footer-link">
              <img className="link-img" src={Library} alt="Home" />
              <span className="name_link">Library</span>
            </div>
          </NavLink>{" "}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
