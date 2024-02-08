import { useState } from "react";
export default function Hooks() {
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
        <h2>Hooks</h2>
        <h3>counter value = {counter}</h3>
        <br />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <br />
        <button onClick={reset}>resetValue</button>
      </div>
    </>
  );
}
