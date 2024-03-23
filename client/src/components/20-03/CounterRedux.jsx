import React from "react";
import { Increment, Decrement } from "../../redux/actions/Counter.actions.js";
import { useDispatch, useSelector } from "react-redux";

export default function CounterRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  );
}
