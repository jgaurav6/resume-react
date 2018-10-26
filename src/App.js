import React, { Component } from "react";
import "./App.css";
// import Button from "./components/Button/Button";
import BackgroundDiv from "./components/BgDiv/BackgroundDiv";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bgDiv">
          <BackgroundDiv className="divLeft" color="#33759B" />
          <BackgroundDiv color="#FFECEC" className="divRight" />
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
