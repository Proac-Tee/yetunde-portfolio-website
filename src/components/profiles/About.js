import React, { Fragment } from "react";
import yetunde from "../../assets/yetunde-standing-image.png";

import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h2>About Me</h2>
        <div className={classes.about}>
          <p>
            Hi! I am Yetunde Oladunni. An History and International Studies
            graduate <br /> with experience in customer service and
            administration
            <br />
            With a Good relational skills with a flair for supporting
          </p>
          <img src={yetunde} alt="yetunde-img" className={classes.images} />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
