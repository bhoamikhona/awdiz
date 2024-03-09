import React, { useState } from "react";

export default function Welcome() {
  const [isSignIn, setIsSignIn] = useState(false);
  console.log(isSignIn);

  function change() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      {isSignIn ? (
        <button onClick={() => setIsSignIn(!isSignIn)}>Welcome, Logout!</button>
      ) : (
        <button
          onClick={function () {
            setIsSignIn(!isSignIn);
          }}
        >
          Sign In
        </button>
      )}

      {isSignIn ? (
        <button onClick={change}>Welcome, Logout!</button>
      ) : (
        <button onClick={change}>Sign In</button>
      )}
    </div>
  );
}
