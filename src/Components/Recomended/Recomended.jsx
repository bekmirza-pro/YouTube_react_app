import React from "react";
import "./Recomended.scss";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

import Right from "../../Assets/Images/Right.png";
import Left from "../../Assets/Images/Left.png";

function Recomended() {
  const [url, setUrl] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((url) => {
        const filteredUrl = url.filter((urls) => urls.id < 4);
        setUrl(filteredUrl);
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="recommended_box">
      <div className="profil-box">
        <div className="profil_box">
          <span className="recommended_heading">Recommended</span>
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
                    width={375}
                    height={100}
                  />
                </div>
              </Link>
              <p className="videos_p">Dude You Re Getting A Telescope</p>
              <div className="p_box">
                <span>34k views · 5 months ago</span>
                <span>Gussie French</span>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}
export default Recomended;
