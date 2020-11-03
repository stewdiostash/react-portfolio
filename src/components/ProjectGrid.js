import React from "react";

const ProjectGrid = (props) => {
  return (
    <div className="project-preview">
      {props.projects.map((project) => (
        <div key={project.id}>
          <a href={project.url}>
            <img className="project-thumbnail" src={project.thumbnail} alt="" />
            <div className="project-summary">
              <p className="project-title">{project.title}</p>
              <p className="project-description caption">{project.summary}</p>
            </div>
          </a>
          <a href={project.github} className="caption git-link">
            On Github &rarr;
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
