import React, { useState } from "react";

export default function Counter() {
  const initialPrice = 1000;
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(initialPrice);

  const increment = function () {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
      setPrice(initialPrice * (counter + 1));
    }
  };

  const decrement = function () {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
      setPrice(initialPrice * (counter - 1));
    }
  };

  const reset = function () {
    setCounter(1);
    setPrice(initialPrice);
  };

  return (
    <>
      <h1>
        Counter: {counter} & Price: {price}
      </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
