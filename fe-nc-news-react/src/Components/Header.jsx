import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Articles">Articles</Link>
        <Link to="/Users">Users</Link>
      </nav>
    </div>
  );
}

export default Header;
