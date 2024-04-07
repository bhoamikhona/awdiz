import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispath = useDispatch();

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispath(increment())}>Increment</button>
      <button onClick={() => dispath(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxCounter;
