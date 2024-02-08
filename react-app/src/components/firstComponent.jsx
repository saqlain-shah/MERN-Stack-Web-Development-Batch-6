import React from "react";
import SecondComponent from "./secondComponent";
export default function FirstComponent() {
  const str="data from first"
  return (
    <React.Fragment>
      <h1>firstComponent</h1>
      <SecondComponent props={str}/>
    </React.Fragment>
  );
}
