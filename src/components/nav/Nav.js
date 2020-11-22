import React from "react";

import classes from "./Nav.module.scss";

function Nav(props) {
  return (
    <nav
      className={[classes.nav, props.style ? classes.navSticky : ""].join(" ")}
      style={{
        transform: props.visible ? "translateY(0)" : "",
        display: props.hide ? "none" : "block",
      }}
    >
      <div className="container">
        <ul>
          <li>
            <a href="#" className="primary-text">
              home
            </a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
