import React, { Fragment } from "react";
import yetunde from "../../assets/yetunde-standing-image.png";

import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <div className={classes.about}>
        <h2>About Me</h2>
        <p>
          Hi! I am an History and International Studies graduate <br /> with
          experience in customer service and administration.
          <br />
          With a Good relational skills with a flair for supporting
        </p>
        <img src={yetunde} alt="yetunde-img" className={classes.images} />
      </div>
    </Fragment>
  );
};

export default About;
