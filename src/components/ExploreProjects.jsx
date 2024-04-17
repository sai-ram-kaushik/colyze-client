import React from "react";

const ExploreProjects = ({ exploreProjects }) => {
  const { title, subTitle, projects } = exploreProjects;
  return (
    <section>
      <div className="explore-projects">
        <div className="heading-container">
          <h3 className="title">{title}</h3>
          <p className="subTitle">{subTitle}</p>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => {
            return (
              <div className="project-container" key={index}>
                <img src={project.image} />
                <h3>{project.name}</h3>
                <p>{project.disc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreProjects;
