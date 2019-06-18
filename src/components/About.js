import React from "react";
import PIZZA from "../PIZZA.jpg";

const About = () => (
  <div>
    <h1>About the site</h1>
    <img src={PIZZA} className="PIZZA" alt="PIZZA" />
    <p>Let's add a description about the Jersey shore.</p>
  </div>
);

export default About;
