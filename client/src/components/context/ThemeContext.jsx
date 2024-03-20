import React, { createContext, useReducer } from "react";

export const MyThemeContext = createContext();

const ThemeData = {
  light: {
    background: "#eee",
    color: "#333",
  },
  dark: {
    background: "#333",
    color: "#eee",
  },
};

const initialState = ThemeData.light;

const reducer = function (state, action) {
  switch (action.type) {
    case "light":
      return ThemeData.light;
    case "dark":
      return ThemeData.dark;
    default:
      return state;
  }
};

function ThemeContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <MyThemeContext.Provider value={{ state, dispatch }}>
        {children}
      </MyThemeContext.Provider>
    </div>
  );
}

export default ThemeContext;
