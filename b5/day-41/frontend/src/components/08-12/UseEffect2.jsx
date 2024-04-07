import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter((prev) => prev + 1);
  }

  useEffect(() => {
    alert("Hi from use effect 2");
  }, []);

  return (
    <div>
      <h1>UseEffect 2</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default UseEffect2;
