import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/add-product" className="nav-link">
        Add Product
      </Link>
      <Link to="/all-products" className="nav-link">
        All Products
      </Link>
    </nav>
  );
}
