import React from "react";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Videos from "../Components/Videos/Videos";
import VideosLeft from "../Components/VideosLeft/VideoLeft";

function Video() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="video_page">
          <Videos />
          <VideosLeft />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Video;
