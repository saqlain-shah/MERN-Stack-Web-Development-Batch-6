import React from "react";
import MainContainer from "./MainContainer";
import Controls from "./Controls";
import Theme from "./Theme";

export default function MainContent() {
  return (
    <React.Fragment>
      <div className="main-content">
        <MainContainer />
        <Controls />
        <Theme />
      </div>
    </React.Fragment>
  );
}
