import React, { Fragment } from "react";

import classes from "./Education.module.css";

const Education = () => {
  return (
    <Fragment>
      <div>
        <h2>Education</h2>
        <div>
          <h3>Babcock University, Ilishan Remo, Ogun State</h3>
          <h6>Dec- Date</h6>
          <h4>B.A. Hons in History and International Studies.</h4>
          <p>2nd class upper division</p>
        </div>
      </div>
      <div>
        <h2>Project</h2>
        <div>
          <h3>
            A dissertation on “AN APPRAISAL OF THE UN, ECOMOG PEACE-KEEPING
            MISION IN THE SIERRA LEONE CIVIL WAR (1991-2002)
          </h3>
          <h6>Dec- Date</h6>
        </div>
      </div>
      <div>
        <h2>Certification</h2>
        <div>
          <h3>Human Resources- Chartered Institute of Personnel Management</h3>
          <h4>Student Member</h4>
          <h6>Dec- Date</h6>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
