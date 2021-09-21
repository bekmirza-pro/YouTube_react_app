import React from "react";

import HeaderM from "../Components/Header/HeaderM";
import Sections from "../Components/Sections/Sections";
import Margaret from "../Components/Margaret/Margaret";
import Phelps from "../Components/Phelps/Phelps";
import Footer from "../Components/Footer/Footer";

function Channel() {
  return (
    <>
      <div className="container">
        <HeaderM />
        <div className="component_box">
          <Sections />
          <div>
            <Phelps />
            <Margaret />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Channel;
