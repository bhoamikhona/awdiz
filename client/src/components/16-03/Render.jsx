import React, { useEffect, useState } from "react";

function Render() {
  const [counter, setCounter] = useState(1);

  /**
   * When state changes page re-renders
   */
  function Increment() {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Counter - {counter}</h1>
      <button onClick={Increment}>+ 3</button>
    </div>
  );
}

export default Render;
