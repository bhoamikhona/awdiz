import { useEffect, useState } from "react";

function UseEffect4() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  function Increment() {
    setCounter((prev) => prev + 1);
  }

  function Increment2() {
    setCounter2((prev) => prev + 1);
  }

  useEffect(() => {
    alert(`Hi from use effect 4`);
  }, [counter, counter2]);

  return (
    <>
      <h1>Use Effect 4</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={Increment}>+</button>
      <h2>Counter 2: {counter2}</h2>
      <button onClick={Increment2}>+</button>
    </>
  );
}

export default UseEffect4;
