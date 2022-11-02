import React, { Fragment } from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>Skills</h1>
        <ul>
          <li>Decision making skill</li>
          <li>Organizational skill</li>
          <li>Leadership skill</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Skills;
