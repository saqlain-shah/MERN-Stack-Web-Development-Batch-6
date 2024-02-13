import React from "react";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Controls from "./Controls";
import Theme from "./Theme";

export default function MainContent() {
  return (
    <React.Fragment>
      
        <Home />
        <About />
        <Portfolio />
        <Blogs />
        <Contact />
        <Controls />
        <Theme />
      
    </React.Fragment>
  );
}
