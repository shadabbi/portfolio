import React from "react";

import classes from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={classes.nav}>
      <div className="container">
        <ul>
          <li>
            <a href="#" className="primary-text">
              home
            </a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">portfolio</a>
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
