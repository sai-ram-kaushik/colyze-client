import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/logo1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <Link to="/">
            <div className="image">
              <img src={logo} />
            </div>
          </Link>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            {nav ? (
              <MdClose onClick={() => setNav(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNav(true)} />
            )}
          </div>
        </div>
      </div>

      <div className={`links-container ${nav ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="#">Login / Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
