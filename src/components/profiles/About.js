import React, { Fragment } from "react";
import yetunde from "../../assets/yetunde-standing-image.png";

import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>About Me</h1>
        <div className={classes.about}>
          <div className={classes.content}>
            <h2>Hi! I am Yetunde Oladunni</h2>
            <p>
              An History and International Studies graduate <br /> with
              experience in customer service and administration
              <br />
              With a Good relational skills with a flair for supporting people
            </p>
          </div>
          <img src={yetunde} alt="yetunde-img" className={classes.images} />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
