import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todo);
  console.log(todos);

  function HandleChange(event) {
    setTodo(event.target.value);
  }

  function HandleSubmit() {
    setTodos([...todos, todo]);
    setTodo("");
  }

  function DeleteTodo(idx) {
    todos.splice(idx, 1);
    setTodos([...todos]);
  }

  return (
    <div>
      <h3>Add Todo</h3>
      <input
        value={todo}
        onChange={HandleChange}
        type="text"
        placeholder="Buy Groceries"
      />
      &nbsp;
      <button onClick={HandleSubmit}>Submit</button>
      {todos.length ? (
        <div>
          {todos.map((todo, i) => (
            <p key={i}>
              {i + 1}. {todo}&nbsp;
              <button onClick={() => DeleteTodo(i)}>delete</button>
            </p>
          ))}
        </div>
      ) : (
        <p>No Todos Found</p>
      )}
    </div>
  );
}
