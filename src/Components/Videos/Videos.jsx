import React from "react";
import "./Videos.scss";

import Oval from "../../Assets/Images/Ovall.png";
import Class from "../../Assets/Images/class.png";
import Noclass from "../../Assets/Images/noclass.png";
import Share from "../../Assets/Images/share.png";
import More from "../../Assets/Images/More-dot.png";
import FoodLogo from "../../Assets/Images/food_logo.png";
import Path from "../../Assets/Images/pathh.png";

function Videos() {
  return (
    <div className="videos_box">
      <iframe
        className="minions"
        src="https://www.youtube.com/embed/4W4ZWpM7_is"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <div className="path_bottom">
        {" "}
        <h2 className="video_heading">The Minions Run the Prison</h2>
        <img className="path-bottom" src={Path} alt="path" />
      </div>
      <div className="video-p">
        <span>123k views</span>
        <div>
          <button className="like_btn">
            <img src={Class} alt="class" /> 123k
          </button>
          <button className="like_btn">
            <img src={Noclass} alt="noclass" /> 435k
          </button>
          <button className="like_btn">
            <img src={Share} alt="Share" />
            Share
          </button>
          <img className="more-dot" src={More} alt="More" />
        </div>
      </div>
      <div className="food_drink-box">
        <div className="food_subscribed">
          <div className="food-subscribed">
            {" "}
            <img src={Oval} alt="Blair" />
            <div className="drink_box">
              <p className="food_s-heading">Food & Drink</p>
              <span className="food_k">245K subscribed</span>
            </div>
          </div>
          <button className="drink_btn">Subscribe</button>
        </div>
      </div>
      <div className="food__box">
        <img src={FoodLogo} alt="FoodLogo" />
        <div className="food-p">
          <span className="food_drink">Food & Drink</span>
          <span className="published">Published on 14 Jun 2019</span>
          <span className="food-paragraf">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy; it is based on a
            number of factors, including ad placement, demographic, even the
            consumer’s mood when they see your ad.{" "}
          </span>
          <a
            className="link_food"
            href="https://github.com/bekmirza-pro?tab=repositories">
            Show more
          </a>
        </div>
      </div>
    </div>
  );
}
export default Videos;
