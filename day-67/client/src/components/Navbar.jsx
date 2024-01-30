import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/register">
        Register
      </Link>
      <Link className="nav-link" to="/login">
        Login
      </Link>
    </nav>
  );
}
