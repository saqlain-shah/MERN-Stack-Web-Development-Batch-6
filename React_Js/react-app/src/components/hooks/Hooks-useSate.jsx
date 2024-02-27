import { useState } from "react";
export default function HooksUseState () {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    // console.log(counter)
    if (counter === 30) {
      setCounter(counter);
    }
  };
  const decrement = () => {
    setCounter(counter - 1);
    // console.log(counter);
    if (counter === 0) {
      setCounter(0);
    }
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <div>
        <h2>useState Hook</h2>
        <button onClick={increment}>Increment</button>
        <br />
        <br />
        <h1>{counter}</h1>
        <br />
        <br />
        <button onClick={decrement}>Decrement</button>
        <br />
        <br />
        <button onClick={reset}>resetValue</button>
      </div>
    </>
  );
}