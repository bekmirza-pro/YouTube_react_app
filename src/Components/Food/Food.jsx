import React from "react";
import "./Food.scss";
import { Link, NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";

import Oval from "../../Assets/Images/Ovall.png";
import Right from "../../Assets/Images/Right.png";
import Left from "../../Assets/Images/Left.png";

function Food() {
  const [url, setUrl] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((url) => {
        const filteredUrl = url.filter((urls) => urls.id < 7);
        setUrl(filteredUrl);
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="food_box">
      <div className="profil-box">
        <div className="profil_box">
          <NavLink className="profil_box" to="/channel">
            <img src={Oval} alt="Blair" />
            <span className="profile_heading">Food & Drink</span>
          </NavLink>
          <span className="food_p">Recommended channel for you</span>
        </div>
        <div className="right_left_box">
          <img src={Right} alt="Blair" />
          <img src={Left} alt="Blair" />
        </div>+
      </div>
      <div className="img_box">
        {loading && (
          <div className="loader">
            <Loader />{" "}
          </div>
        )}
        {url.length > 0 &&
          url.map((row) => (
            <li className="video_img" key={row.id}>
              <Link to={`/video`}>
                <div>
                  <img
                    className="img_video"
                    src={row.url}
                    alt={row.title}
                    width={170}
                    height={150}
                  />
                </div>
              </Link>
              <p className="videos_p">Asteroids</p>
              <div className="p_box">
                <span>13k views · 15 days ago</span>
                <span>Food & Drink</span>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}
export default Food;
