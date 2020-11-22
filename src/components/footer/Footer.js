import React from "react";

import classes from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container  py-5">
        <a className={classes.backTop} href="#header">
          <i className="fas fa-angle-double-up"></i>
        </a>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 my-5">
            <div className={classes.icons}>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-codepen"></i>
              </a>
            </div>

            <div className="row text-center mt-5">
              <div className="col">
                <p className="text-light">
                  Shadab Ali <span className="text-primary">©2020</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
