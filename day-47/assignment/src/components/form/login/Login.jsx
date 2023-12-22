import React from "react";
import "../form.css";

const Login = () => {
  return (
    <div>
      <form>
        <h1>Login,</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
