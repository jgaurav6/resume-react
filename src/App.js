import React, { Component } from "react";
import "./App.css";
import BackgroundDiv from "./components/BgDiv/BackgroundDiv";
import Navbar from "./components/Navbar/Navbar";
import NameSection from "./components/NameSection/NameSection";
import ImageView from "./components/ImageView/ImageView";
import personSitting from "./assets/images/personSitting.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faArrowLeft);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bgDiv">
          <BackgroundDiv className="divLeft" color="33759B" content="left" />
          <BackgroundDiv color="FFECEC" className="divRight" content="right" />
        </div>
        <Navbar />
        <NameSection />
        <ImageView source={personSitting} sizeInPercent="25" />
      </div>
    );
  }
}

export default App;
