import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import FirstImage from '../Images/frontend.png';

const Home = () => {
  return (
    <div className="header-container">
      <Navbar />
      <div className="header-bannerImage-container">
        <img src={FirstImage} alt="Computer image." />
      </div>
      <div className="header-banner-container">
        <div className="header-text-section">
          <h1 className="primary-heading">
            Welcome to my Frontend Environment
          </h1>
          <p className="primary-text">
            This page was designed using my own framework developed with React.js
          </p>
          <button className="secondary-button">
            View the Code <FiArrowRight />{""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;