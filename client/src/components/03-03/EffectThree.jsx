import React, { useEffect, useState } from "react";

export default function EffectThree() {
  const [counter1, setCounter1] = useState(12);
  const [counter2, setCounter2] = useState(76);

  // useEffect will execute on initial render and when passed dependency
  // changes
  useEffect(() => {
    console.log("Code Executed - Single Dependency");
  }, [counter1]);

  return (
    <div>
      <h1>Counter1: {counter1} </h1>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>

      <h1>Counter2: {counter2} </h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}
