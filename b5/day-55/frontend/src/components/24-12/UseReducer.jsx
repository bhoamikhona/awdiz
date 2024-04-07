import React, { useReducer } from "react";

// step 01 - create initial state
const initialState = { count: 0, username: "" };

// step 02 - create a reducer
// state is initialState that will get updated
// action is an object that is why we are using dot notation
const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
    </div>
  );
};

export default UseReducer;
