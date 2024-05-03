import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>

      <div className="home-btn-container">
        <button className="home-btn">
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
        </button>
        <button className="home-btn">Logout</button>
      </div>
    </div>
  );
}

export default Home;
