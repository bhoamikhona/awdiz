import React, { createContext, useState } from "react";

export const MyCounterContext = createContext();

// higher order component (HOC) - props component
function ProviderCounterContext({ children }) {
  // children - <App />
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }

  return (
    <MyCounterContext.Provider value={{ counter, Increment }}>
      {children}
    </MyCounterContext.Provider>
  );
}

export default ProviderCounterContext;
