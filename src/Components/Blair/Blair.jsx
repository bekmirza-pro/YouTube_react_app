import React from "react";
import "./Blair.scss";
import { Link, NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";

import ProfileB from "../../Assets/Images/Oval.png";
import Right from "../../Assets/Images/Right.png";
import Left from "../../Assets/Images/Left.png";

function Blair() {
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
    <div className="dollie_box">
      <div className="profil-box">
        <div className="profil_box">
          <NavLink className="profil_box" to="/channel">
            <img src={ProfileB} alt="Blair" />
            <span className="profile_heading">Dollie Blair</span>
          </NavLink>
        </div>
        <div className="right_left_box">
          <img src={Right} alt="Blair" />
          <img src={Left} alt="Blair" />
        </div>
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
              <p className="videos_p">Telescopes 101</p>
              <div className="p_box">
                <span>11k views · 6 months ago</span>
                <span>Dollie Blair</span>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}
export default Blair;
