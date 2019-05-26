import React from "react";
import video from "../media/homevid.mp4";
import Nav from "../components/Nav";
import "../css/Home.css";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="home-container">
        <Nav />
        <div id="mainArea">
          <h2 className="name">Tracy Stark</h2>
          <video id="home-video" loop autoPlay>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>
            Hey there, nice to meet you! I'm a Front End Developer in Dallas,
            TX.
          </h3>
          <div id="social">
            <a
              className="social-button"
              id="github"
              href="https://github.com/tardisdriver"
            >
              <i className="fab fa-github-square" />
              GitHub
            </a>
            <a
              className="social-button"
              id="linkedin"
              href="https://www.linkedin.com/in/tracy-stark/"
            >
              {" "}
              <i className="fab fa-linkedin" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
}
