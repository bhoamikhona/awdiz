import React, { useEffect, useState } from "react";

export default function EffectTwo() {
  const [counter, setCounter] = useState(1);

  // useEffect will execute the code on initial render only
  useEffect(() => {
    console.log(`Code Executed! - Empty Dependencies`);
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
