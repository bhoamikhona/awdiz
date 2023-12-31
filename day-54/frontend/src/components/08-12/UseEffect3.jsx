import React, { useEffect, useState } from "react";

const UseEffect3 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  function Increment() {
    setCounter((prev) => prev + 1);
  }

  function Increment2() {
    setCounter2((prev) => prev + 1);
  }

  useEffect(() => {
    alert(`Hi from use effect 3`);
  }, [counter]);

  return (
    <div>
      <h1>UseEffect3</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={Increment}>+</button>
      <h2>Counter 2 : {counter2}</h2>
      <button onClick={Increment2}>+</button>
    </div>
  );
};

export default UseEffect3;
