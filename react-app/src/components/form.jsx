import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState("");
  function handleChange(e) {
    setData(e.target.value);
  }
  return (
    <React.Fragment>
      <div>form</div>
      <input type="text" onChange={handleChange} />
      <button
        onClick={() => {
          alert(data);
        }}
      >
        Submit
      </button>
    </React.Fragment>
  );
}
