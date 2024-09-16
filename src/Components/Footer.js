import React from "react";
import Logo from "../Images/dk-logo.png";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="DK Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com/profile.php?id=100071586961082" target="_blank"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/david-koen-429762312/" target="_blank"><SiLinkedin /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <span><a href="https://davidkoen.tech">Portfolio</a></span>
        <span><a href="https://davidkoen.tech/about-me/">About Me</a></span>
        <span><a href="https://davidkoen.tech/contact-me/">Contact Me</a></span>
        </div>
        <div className="footer-section-columns">
          <span>Email: <a href="mailto:hello@davidkoen.tech">hello@davidkoen.tech</a></span>
          <span>Phone: <a href="tel:+27611809200">+27 61 180  9200</a></span>
          <span>Address: Currently, I am in GMT +2.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;