import React from "react";

import Header from "../Components/Header/Header";
import Sections from "../Components/Sections/Sections";
import Blair from "../Components/Blair/Blair";
import Recomended from "../Components/Recomended/Recomended";
import Food from "../Components/Food/Food";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="component_box">
          <Sections />
          <div>
            <Blair />
            <Recomended />
            <Food />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
