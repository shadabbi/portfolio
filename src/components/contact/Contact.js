import React from "react";

import classes from "./Contact.module.scss";

function Contact() {
  return (
    <section className={classes.contact}>
      <div className="container py-5">
        <h3 className="section-heading">CONTACT</h3>
        <div className="row justify-content-center">
          <p className={classes.para}>Have a question or want to work together?</p>
        </div>

        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-5">
            <form>
              <input className="form-control" type="text" placeholder="Name" />
              <input
                className="my-2"
                type="text"
                placeholder="Enter you email"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="9"
                placeholder="Your message"
              ></textarea>
              <div className="main-btn d-flex justify-content-end mt-3">
                <a href="#">Submit</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
