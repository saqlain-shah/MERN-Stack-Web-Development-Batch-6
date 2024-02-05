import React from "react";
import SecondComponent from "./secondComponent";
export default function FirstComponent() {
  return (
    <React.Fragment>
      <h1>firstComponent</h1>
      <SecondComponent />
    </React.Fragment>
  );
}
