import React from "react";
import Application from "../Images/frontend-app.jpeg";

const Work = () => {
  const frontendEndPrograms = [
    {
      image: Application,
      title: "Coming Soon",
      text: "Watch this space.",
    },
    {
      image: Application,
      title: "Coming Soon",
      text: "Watch this space.",
    },
    {
      image: Application,
      title: "Coming Soon",
      text: "Watch this space.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Programs</p>
        <h1 className="primary-heading">Portfolio</h1>
        <p className="primary-text">
          I have listed just a few examples of what I can reach using exclusively frontend technologies.
        </p>
      </div>
      <div className="work-section-bottom">
        {frontendEndPrograms.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;