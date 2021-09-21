import React from "react";
import "../VideosLeft/VideoLeft.scss";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function VideosLeft() {
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
    <div className="video-player_box">
      <div className="autoplay_box">
        <h3 className="next">Next</h3>
        <div className="button_tg">
          <span className="autoplay">Autoplay</span>
          <div className="row">
            <input type="checkbox" id="theme-1" />
            <label htmlFor="theme-1"></label>
          </div>
        </div>
      </div>
      <div className="img_box">
        {loading && (
          <div className="loader_left">
            <Loader />{" "}
          </div>
        )}
        {url.length > 0 &&
          url.map((row) => (
            <li className="video-img" key={row.id}>
              <Link to={`/video`}>
                <div>
                  <img
                    className="img_video"
                    src={row.url}
                    alt={row.title}
                    width={250}
                    height={200}
                  />
                </div>
              </Link>
              <p className="video__p">Baby Monitor Technology</p>
              <div className="p_box">
                <span>123k views</span>
                <span>Dollie Blair</span>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}
export default VideosLeft;
