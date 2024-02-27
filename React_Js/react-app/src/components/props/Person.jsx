import React from "react";

export default function Person(props) {
  return (
    <>
      <h2>Props</h2>
      <h4>
        I am {props.prop.name} and I am {props.prop.status} at UOBS.
      </h4>
    </>
  );
}
