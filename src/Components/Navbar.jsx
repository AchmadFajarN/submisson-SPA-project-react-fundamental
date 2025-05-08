import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <h1>
        <Link to={"/"} className="link">
          Aplikasi Catatan
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/arsip"} className="link">
              Arsip
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
