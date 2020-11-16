import React from "react";

import classes from "./Skill.module.scss";

function Skill(props) {
  return (
    <div className="col-md-3">
      <div className={classes.skill}>
        <div className={classes.hexa}>{props.children}</div>
        <div className={classes.skill__description}>
          <h5 className="sub-heading">{props.heading}</h5>
          <p>{props.des}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
