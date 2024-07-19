import React from "react";
import { projects } from "./Projects.data.js";
import gb from "../../assets/github.svg";
const Projects = () => {
  return (
    <section className="projects_section">
      <h1>Proyectos</h1>
      <button className="projects_btn">
        <a href="https://github.com/MFaii" target="_blank">
          Github <img src={gb} />
        </a>
      </button>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div key={project.id} className="projects_container">
              <div className="img-mask">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {Array.isArray(project.stack) ? (
                    project.stack.map((stack, index) => (
                      <span key={index}>{stack}</span>
                    ))
                  ) : (
                    <span>No stack available</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
