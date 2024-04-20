import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="about-company">
          <div className="title">
            <h3>
              COL<span>YZE</span>
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam culpa, sequi voluptatem ipsum sapiente esse distinctio
              incidunt ducimus autem.
            </p>
          </div>
        </div>
        <div className="about-us">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Explore Projects</a>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <div className="contact-items">
              <CiMail className="icon" />
              <p>dev.colyze@gmail.com</p>
            </div>

            <div className="contact-items">
              <FaPhoneAlt className="icon" />
              <p>+91 9999999999</p>
            </div>

            <div className="contact-items">
              <IoLocationSharp className="icon" />
              <p>New Delhi</p>
            </div>
          </div>
        </div>
        <div className="privacy">
          <h3>Privacy</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>

            <li>
              <a href="#">Terms</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
