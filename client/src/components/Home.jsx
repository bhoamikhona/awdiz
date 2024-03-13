import React, { useContext } from "react";
import { MyCounterContext } from "./context/CounterContext.jsx";

export default function Home() {
  const { counter, Increment } = useContext(MyCounterContext);
  return (
    <div>
      <h2>Counter : {counter} </h2>
      <button onClick={Increment}>+</button>
    </div>
  );
}
