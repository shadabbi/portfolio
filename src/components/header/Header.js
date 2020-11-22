import React from "react";

import classes from "./Header.module.scss";
import Particals from "../particals/Particals";

function Header() {
  return (
    <div>
      <header
        id="header"
        className={[classes["main-header"], classes["bg-color-bg"]].join(" ")}
      >
        <div className="container">
          <div className={classes.particals}>
            <Particals />
          </div>
          <div className="row">
            <div className="col-md-8 text-center m-auto">
              <div className={classes["main-header__text-box"]}>
                <p className="mb-4">
                  Hello, I'm <span className="primary-text">Shadab Ali</span>.
                  <br />A full-stack web developer.
                </p>
                <div className="main-btn">
                  <a href="#">
                    View my work <i className="fas fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
