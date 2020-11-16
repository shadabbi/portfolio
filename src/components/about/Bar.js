import React from "react";

import classes from "./Bar.module.scss";

function Bar(props) {
  return (
    <div className={classes.bar}>
      <div className={classes["bar-fill"]} style={{ width: `${props.width}` }}>
        <div className={classes.tag}>
          <p>{props.type}</p>
        </div>
      </div>
      <span className={[classes["pr-2"], "text-muted"].join(" ")}>
        {props.width}
      </span>
    </div>
  );
}

export default Bar;
