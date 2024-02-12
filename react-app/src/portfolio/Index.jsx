import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";

export default function Index() {
  return (
    <React.Fragment>
      <div id="colorlib-page">
        <div className="container-wrap">
          <SideBar />
          <Content/>
        </div>
      </div>
    </React.Fragment>
  );
}
