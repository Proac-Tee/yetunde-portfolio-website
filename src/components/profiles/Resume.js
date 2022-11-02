import React, { Fragment } from "react";
import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <Fragment>
      <h2>Work Experience</h2>
      <div className={classes.container}>
        <div className={classes.work_one}>
          <h3>Sovereign Trust Insurance Plc </h3>
          <h6>Dec- Date</h6>
          <h4>Front Desk/ Relationship Management Executive</h4>
          <p>
            Greet customers graciously and verify claims while maintaining cold
            disposition. Logistics management - ensure the transportation office
            mail and parcels. Manage incoming calls and requests from potential
            customers or customers. Distribution and storage correspondence
            records such as correspondence, emails and packages. To make sure
            the friendliness of the customer reception. Office handling tasks
            such as scanning or printing. Cooperation with other departments
          </p>
        </div>
        <div className={classes.work_two}>
          <h3>Yetlan Publishing Company</h3>
          <h6>Date</h6>
          <h4>Editor/ Store Manager</h4>
          <p>
            Proofreading and reviewing manuscripts for correction. Ensuring the
            proper arrangement of books according to their title. Picking and
            collating books for distribution and sale.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
