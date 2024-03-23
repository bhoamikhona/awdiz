import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallback = function () {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = function () {
    setCount((c) => c + 1);
  };

  // const addTodo = function() {
  //     setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <ChildComponent todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseCallback;
