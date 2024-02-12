import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";
import Contact from "./Contact";

export default function MainContainer() {
  return (
    <React.Fragment>
      <About />
      <Portfolio />
      <Blogs />
      <Contact />
    </React.Fragment>
  );
}
