import React, { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext.jsx";

function Theme() {
  const { dispatch, state } = useContext(MyThemeContext);
  return (
    <div style={state}>
      <div style={{ height: "100vh", width: "100vw" }}>
        <h1>Theme</h1>
        <button onClick={() => dispatch({ type: "light" })}>light</button>
        <button onClick={() => dispatch({ type: "dark" })}>dark</button>
      </div>
    </div>
  );
}

export default Theme;
