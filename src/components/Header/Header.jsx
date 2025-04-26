import React from "react";
import { Link } from "react-router-dom";
import c from "./Header.module.scss";

const Header = () => {
  return (
    <header className={c.header}>
      <h1>Belle Aura</h1>
      <nav className={c.nav}>
        <ul className={c.navList}>
          <li className={c.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={c.navItem}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={c.navItem}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={c.navItem}>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
