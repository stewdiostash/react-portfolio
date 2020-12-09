import React from "react";
import { motion } from "framer-motion";

const ProjectGrid = (props) => {
  return (
    <div id="project-grid">
      {props.projects.map((project) => (
        <motion.div
          className="project-preview"
          key={project.id}
          whileHover={{ y: "-10px" }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a href={project.url}>
            {/* <img className="project-thumbnail" src={project.thumbnail} alt="" /> */}
            <div
              className="project-thumbnail"
              // styles={{
              //   backgroundImage: `url(${project.thumbnail})`,
              // }}
              style={{ backgroundColor: "thistle" }}

              // style={{ height: "100%" }}
            >
              <motion.img
                // className="project-thumbnail"
                src={project.thumbnail}
                // style={{ visibility: "hidden" }}
                alt=""
                // whileHover={{
                //   opacity: 0,
                // }}
                // transition={{ duration: 0.3 }}
              />
            </div>
            <div className="project-summary">
              <p className="project-title">{project.title}</p>
              <p className="project-description caption">{project.summary}</p>
            </div>
          </a>
          <a href={project.github} className="caption git-link">
            On Github &rarr;
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
