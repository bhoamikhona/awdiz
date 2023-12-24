import { useState } from "react";

function Counter2() {
  const [counter, setCounter] = useState(100);
  console.log(counter, "counter");

  function Increment() {
    setCounter((prevValue) => prevValue + 1);
  }

  function Decrement() {
    setCounter((prevValue) => prevValue - 1);
  }

  function Reset() {
    setCounter(100);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter2;
