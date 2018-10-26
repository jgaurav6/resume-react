import React, { Component } from "react";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Toolbar from "./components/Toolbar/Toolbar";
import "./App.css";
// import Button from "./components/Button/Button";
import BackgroundDiv from "./components/BgDiv/BackgroundDiv";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Backdrop from "./components/Backdrop/Backdrop";
library.add(faBars);

class App extends Component {
  state = {
    SideDrawerOpen: false
  };

  navItems = [
    { id: "item1", value: "PROJECTS" },
    { id: "item2", value: "PORTFOLIO" },
    { id: "item3", value: "ABOUT" },
    { id: "item4", value: "SKILLS" }
  ];

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        SideDrawerOpen: !prevState.SideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <div className="bgDiv">
          <BackgroundDiv className="divLeft" color="#33759B" />
          <BackgroundDiv color="#FFECEC" className="divRight" />
        </div>
        <Toolbar
          drawerClickHandle={this.drawerToggleClickHandler}
          navItems={this.navItems}
          buttonText="HIRE ME"
        />
        {/* <div className="hireMeButton">
          <Button text="HIRE ME" />
        </div> */}
        <SideDrawer
          show={this.state.SideDrawerOpen}
          navItems={this.navItems}
          buttonText="HIRE ME"
        />
        {backdrop}
      </div>
    );
  }
}

export default App;
