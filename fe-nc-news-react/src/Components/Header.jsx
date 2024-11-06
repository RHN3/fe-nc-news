import React from "react";

function Header() {
  return (
    <div className="Header">
      <h1>NC News</h1>
      <nav>
        <a href="/Home">Home</a>
        <a href="/Articles">Articles</a>
        <a href="/Users">Users</a>
      </nav>
    </div>
  );
}

export default Header;
