import React from "react";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src="./assets/images/logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>What's New</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
