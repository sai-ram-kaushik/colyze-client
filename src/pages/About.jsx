import React from "react";
import data from "../data/about-page.json";
const About = () => {
  const { subTitle, buttonTitle, image, team } = data.about;
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h3>
            Innovate<span>.</span> Design<span>.</span> Inspire
          </h3>
          <p>{subTitle}</p>
          <button>{buttonTitle}</button>
        </div>

        <div className="image-container">
          <div className="image">
            <img src={image} alt="about_vector" />
          </div>
        </div>
      </div>

      <div className="team-container">
        <h3 className="title">{team.title}</h3>
        <div className="team-content">
          {team.team.map((member, index) => {
            return (
              <div className="member-container" key={index}>
                <img src={member.image} />
                <h3>{member.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
