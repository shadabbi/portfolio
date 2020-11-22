import React from "react";

import classes from "./About.module.scss";
import Skill from "./Skill";
import Bar from "./Bar";
import shadab from "../../assets/img/shadab.jpg";

function About() {
  return (
    <section id="about" className="about my-5">
      <div className="container py-5">
        <h3 className="section-heading">ABOUT</h3>
        <div className={[classes.skills, "row"].join(" ")}>
          <Skill
            heading="Fast"
            des=" Fast load times and lag free interaction, my highest priority."
          >
            <i className="fas fa-tachometer-alt text-light"></i>
          </Skill>

          <Skill
            heading="Responsive"
            des="My layouts will work on any device, big or small."
          >
            <i className="fas fa-desktop"></i>
          </Skill>
          <Skill
            heading="Intuitive"
            des="Strong preference for easy to use, intuitive UX/UI."
          >
            <i className="far fa-lightbulb"></i>
          </Skill>
          <Skill
            heading="Dynamic"
            des="Websites don't have to be static, I love making pages come to life."
          >
            <i className="fas fa-rocket "></i>
          </Skill>
        </div>

        <div className="row text-center">
          <div className="col-md-6">
            <div className={classes["about-person"]}>
              <div>
                <img src={shadab} alt="shadab" />
              </div>
              <h5 className="sub-heading">Who's this guy?</h5>
              <p className="para">
                I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
                serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences. Let's make something
                special.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className={classes.bars}>
              <Bar type="css" width="80%" />
              <Bar type="HTML" width="90%" />
              <Bar type="React" width="70%" />
              <Bar type="JavaScript" width="60%" />
              <Bar type="Angular" width="80%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
