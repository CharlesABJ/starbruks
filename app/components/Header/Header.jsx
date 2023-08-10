import React from "react";

import "./Header.scss";
import Link from "next/link";
function Header(props) {
  return (
    <header>
      <div className="logo">
        <Link className="nav-active" href="">
          <img src="./assets/images/logo.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="nav-active" href="">
              Home
            </Link>
          </li>
          <li>
            <Link href="">Menu</Link>
          </li>
          <li>
            <Link href="">What's New</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
