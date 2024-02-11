import React from "react";
import Main from "./Main";
import Controls from "./Controls";
import Theme from "./Theme";

export default function MainContent() {
  return (
    <React.Fragment>
      <div className="main-content">
        <Main />
        <Controls />
        <Theme />
      </div>
    </React.Fragment>
  );
}
