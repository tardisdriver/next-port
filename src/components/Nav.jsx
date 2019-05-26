import React from "react";
import "../css/Nav.css";
import navBkg from "../media/navCloud.png";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navBckg: "nav-base-state",
      listState: "hidden"
    };
    this.handleHamburger = this.handleHamburger.bind(this);
  }
  handleHamburger() {
    //css animation to rotate the menu to vertical
    this.setState({ navBckg: "nav-open", listState: "cascade" });
    //css animation to turn hamburger to an X
    //hide second line
    //rotate first line and third line
  }

  render() {
    return (
      <div id="nav-container">
        <div className="hamburger" onClick={this.handleHamburger}>
          <div className="line line1" />
          <div className="line line2" />
          <div className="line line3" />
          <div className="menu-text">MENU</div>
        </div>
        <img className={this.state.navBckg} src={navBkg} alt="" />

        <ul className={this.state.listState}>
          <li>Contact</li>
          <li>Projects</li>
          <li>Experiments</li>
          <li>About Me</li>
        </ul>
      </div>
    );
  }
}
