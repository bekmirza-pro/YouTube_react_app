import React from "react";
import "./Header.scss";

import Burger from "../../Assets/Images/Menu.png";
import Search from "../../Assets/Images/search.png";
import Camera from "../../Assets/Images/camera.png";
import More from "../../Assets/Images/more.png";
import Bong from "../../Assets/Images/bong.png";
import Userpic from "../../Assets/Images/Userpic.png";

import Logo from "../Lib/Svg/Apple";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img className="humburger" src={Burger} alt="humburger" />
        <a className="link_youtube" href="https://www.youtube.com/">
          <Logo className="logo" />
        </a>
        <form className="form_input">
          <label className="search_label">
            <input
              className="input_search"
              type="search"
              placeholder="Search"
            />
            <img src={Search} alt="search" />
          </label>
        </form>
      </div>
      <div className="header-right">
        <img className="icon_youtube" src={Camera} alt="Camera" />
        <img className="icon_youtube" src={More} alt=" More" />
        <img className="icon_youtube" src={Bong} alt="Bong" />
        <img className="search" src={Search} alt="search" />
        <img className="user_pic" src={Userpic} alt="Userpic " />
      </div>
    </header>
  );
}
export default Header;
