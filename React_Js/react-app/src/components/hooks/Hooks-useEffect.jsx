import React, { useState, useEffect } from "react";

const HooksUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // document.title = `You clicked ${count} times.`; // This is the mounting part
  }, [count]); // This is the updating part
  return (
    <>
      <h2>useEffect Hook</h2>
      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
    </>
  );
};

export default HooksUseEffect;
