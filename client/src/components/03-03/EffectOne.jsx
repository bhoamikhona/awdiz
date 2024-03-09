import React, { useEffect, useState } from "react";

export default function EffectOne() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  // useEffect will execute the code on initial render on component and
  // whenever any state changes
  useEffect(() => {
    console.log("Code executed! - No Dependency");
  });

  return (
    <div>
      <h1>Counter 1: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Counter 2: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}
