import React from "react";
import "./Phelps.scss";

import Cover from "../../Assets/Images/Cover.png";
import Margaret from "../../Assets/Images/margaret.png";
import Bong from "../../Assets/Images/bong.png";
import Search from "../../Assets/Images/search.png";
import VideoImg from "../../Assets/Images/video_img.png";
import Channel from "../../Assets/Images/profil1.png";
import Channel2 from "../../Assets/Images/profil2.png";
import Channel3 from "../../Assets/Images/profil3.png";
import BottomImg from "../../Assets/Images/bottom.png";

import { NavLink } from "react-router-dom";

function Phelps() {
  return (
    <div className="margaret_channel">
      <img className="bg-cover_img" src={Cover} alt="Cover " />
      <div className="subscribed_channel">
        <div className="profil">
          <NavLink to="/channel">
            {" "}
            <img className="margaret" src={Margaret} alt="Margaret " />
          </NavLink>
          <div className="channel_data">
            <p className="user-name">Margaret Phelps</p>
            <span className="subscribed">245K subscribed</span>
          </div>
        </div>
        <div className="subscribe">
          <img className="icon_youtube" src={Bong} alt="Bong" />
          <button className="subscribe_btn">Subscribe 2.3m</button>
        </div>
      </div>
      <ul className="contact-list">
        <li>
          <NavLink className="list-item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="list-item" to="/video">
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink className="list-item" to="/">
            Playlists
          </NavLink>
        </li>
        <li className="list-item">
          {" "}
          <img src={BottomImg} alt="BottomImg" />
        </li>
      </ul>
      <div className="contact_link">
        <div>
          <ul className="contact_list">
            <li>
              <NavLink className="list-item" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="list-item" to="/video">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink className="list-item" to="/">
                Playlists
              </NavLink>
            </li>
            <li>
              <NavLink className="list-item" to="/channel">
                Channels
              </NavLink>
            </li>
            <li>
              <NavLink className="list-item" to="/">
                Discussion
              </NavLink>
            </li>
            <li>
              <NavLink className="list-item" to="/">
                About
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <img src={Search} alt="search" />
            </li>
          </ul>
          <div className="video_player">
            <img src={VideoImg} alt="video_img" width="400" height="250" />
            <div className="video_box-p">
              <p className="video__heading">
                Choosing The Best Audio Player Software For Your Computer
              </p>
              <p className="video_p">
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.{" "}
              </p>
              <span className="video_date">11k views · 6 months ago</span>
            </div>
          </div>
        </div>
        <div className="recommended-channel">
          <p className="recommended_channel">Recommended channel</p>
          <div className="channel_box">
            <img src={Channel} alt="Channel " />
            <span className="channel_name">Flora Benson</span>
          </div>
          <div className="channel_box">
            <img src={Channel2} alt="Channel " />
            <span className="channel_name">Violet Cobb</span>
          </div>
          <div className="channel_box">
            <img src={Channel3} alt="Channel " />
            <span className="channel_name">Phillip Mullins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Phelps;
