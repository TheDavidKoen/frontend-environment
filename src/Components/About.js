import React from "react";
import Banner from "../Images/frontend-banner.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={Banner} alt="About section banner." />
      </div>
      <div className="about-section-space">

      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Easy to read code is a priority.
        </h1>
        <p className="primary-text">
          This landing page was built using React Functional Components, and then styled with a flexible CSS stylesheet. 
          I do strive to construct easy-to-read syntax in order to allow for a fluid work flow that can be passed between teams for a foreseeable future.
        </p>
        <p className="primary-text">
          Feel free to view YouTube videos that summarize the following programs:
        </p>
        <div className="about-buttons-container">
          <button className="watch-video-button">
            <a href="https://www.youtube.com/@It_Might_Be_The_Dave" target="_blank"><BsFillPlayCircleFill /> Videos Coming Soon</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;