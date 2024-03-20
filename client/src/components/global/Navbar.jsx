import React, { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext.jsx";

function Navbar() {
  const { dispatch, state } = useContext(MyThemeContext);
  return (
    <div style={state}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100vw",
          padding: "20px",
        }}
      >
        Home
        <div>
          <button onClick={() => dispatch({ type: "light" })}>light</button>
          <button onClick={() => dispatch({ type: "dark" })}>dark</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
