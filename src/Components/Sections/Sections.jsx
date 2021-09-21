import React from "react";
import "./Sections.scss";

import { NavLink } from "react-router-dom";

import Home from "../../Assets/Images/home.png";
import Trending from "../../Assets/Images/ui.png";
import Subscribe from "../../Assets/Images/subscribe.png";
import Library from "../../Assets/Images/documents.png";
import Time from "../../Assets/Images/time.png";
import History from "../../Assets/Images/others.png";
import Favourites from "../../Assets/Images/star.png";
import Liked from "../../Assets/Images/hard.png";
import Music from "../../Assets/Images/mucis.png";
import Games from "../../Assets/Images/game.png";
import Path from "../../Assets/Images/Path.png";

import Profile from "../../Assets/Images/Profile.png";
import Profile2 from "../../Assets/Images/Profile2.png";
import Profile3 from "../../Assets/Images/Profile3.png";
import Profile4 from "../../Assets/Images/Profile4.png";
import Profile5 from "../../Assets/Images/Profile5.png";
import Profile6 from "../../Assets/Images/Profile6.png";
import Setting from "../../Assets/Images/Setting.png";

function Sections() {
  return (
    <div className="sections">
      <div className="section-top">
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Home} alt="Home" />
            <span className="name_link">Home</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Trending} alt="Home" />
            <span className="name_link"> Trending </span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Subscribe} alt="Home" />
            <span className="name_link">Subscriptions</span>
          </NavLink>{" "}
        </div>
      </div>
      <div className="section-bottom">
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Library} alt="Home" />
            <span className="name_link">Library</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={History} alt="Home" />
            <span className="name_link">History</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Time} alt="Home" />
            <span className="name_link">Watch later</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Favourites} alt="Home" />
            <span className="name_link">Favourites</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Liked} alt="Home" />
            <span className="name_link">Liked videos</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Music} alt="Home" />
            <span className="name_link">Music</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Games} alt="Home" />
            <span className="name_link">Games</span>
          </NavLink>{" "}
        </div>
        <div className="box-link">
          <NavLink className="name_link" to="/">
            {" "}
            <img className="link_img" src={Path} alt="Home" />
            <span className="name_link">Show more</span>
          </NavLink>{" "}
        </div>
      </div>
      <div>
        <h3>Subscriptions</h3>
        <div>
          <NavLink className="box-link " to="/channel">
            <img src={Profile} alt="Profile" />
            <span className="user_name">Gussie Singleton</span>
          </NavLink>
        </div>
        <div>
          <NavLink className="box-link " to="/channel">
            <img src={Profile2} alt="Profile" />
            <span className="user_name">Nora Francis</span>
          </NavLink>{" "}
        </div>
        <div>
          <NavLink className="box-link " to="/channel">
            <img src={Profile3} alt="Profile" />
            <span className="user_name">Belle Briggs</span>
          </NavLink>{" "}
        </div>
        <div>
          <NavLink className="box-link " to="/channel">
            <img src={Profile4} alt="Profile" />
            <span className="user_name">Eunice Cortez</span>
          </NavLink>{" "}
        </div>
        <div>
          <NavLink className="box-link " to="/channel">
            <img src={Profile5} alt="Profile" />
            <span className="user_name">Emma Hanson</span>
          </NavLink>{" "}
        </div>
        <div>
          <NavLink className="box-link " to="/channel">
            <img src={Profile6} alt="Profile" />
            <span className="user_name">Leah Berry</span>
          </NavLink>{" "}
        </div>
        <div className="box_link">
          <img src={Setting} alt="Profile" />
          <span className="user_name">Setting</span>
        </div>
      </div>
    </div>
  );
}
export default Sections;
