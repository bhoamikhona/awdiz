import React, { useMemo, useState } from "react";

function UseMemo() {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([]);

  function AddTodo() {
    setTodos([...todos, "New Todo"]);
  }

  // const lengthyCalculations = ExpensiveCalculations(counter);
  const lengthyCalculations = useMemo(
    () => ExpensiveCalculations(counter),
    [counter]
  );

  return (
    <div>
      <h1>Expensive Calculation: {lengthyCalculations}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      <button onClick={AddTodo}>Add Todo</button>
      {todos.map((todo) => (
        <h2>{todo}</h2>
      ))}
    </div>
  );
}

function ExpensiveCalculations(number) {
  console.log(`Running the expensive calculation...`);
  for (let i = 0; i < 1000000000; i++) {
    number += 1;
  }
  return number;
}

export default UseMemo;
