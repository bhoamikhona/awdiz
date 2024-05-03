import React, { useContext } from "react";
import { MyCounterContext } from "./context/CounterContext.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { counter, Increment } = useContext(MyCounterContext);
  const { state } = useContext(AuthContext);
  console.log(state);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page Welcome - {state?.user?.name}</h1>
      <h2>Counter : {counter} </h2>
      <button onClick={Increment}>+</button>
    </div>
  );
}
