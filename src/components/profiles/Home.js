import React from "react";
import Card from "../UI/Card";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import classes from "./Home.module.css";
import Resume from "./Resume";
import Skills from "./Skills";

const Home = () => {
  return (
    <Card>
      <About />
      <Resume />
      <Skills />
      <Education />
      <Contact />
    </Card>
  );
};

export default Home;
