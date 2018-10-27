import React from "react";
import "./Toolbar.css";
import Button from "../../Button/Button";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandle} />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          {props.navItems.map(item => (
            <li key={item.id}>
              {" "}
              <a href="/" id={item.id}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    {props.buttonText !== "" && (
      <div className="hireMeButton">
        <Button text={props.buttonText} />
      </div>
    )}
    {/* <FancyButton /> */}
  </header>
);

export default toolbar;
