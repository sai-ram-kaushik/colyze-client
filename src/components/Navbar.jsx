import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <h1>
            COL<span>YZE</span>
          </h1>
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
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
