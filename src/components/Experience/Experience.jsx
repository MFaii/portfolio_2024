import React from "react";
import { experience } from "./experience.data.js";

const Experience = () => {
  return (
    <section className="experience_section">
      <h1>Experiencia</h1>
      {experience
        .slice()
        .reverse()
        .map((exp) => {
          return (
            <div className="experience" key={exp.id}>
              <div className="experience_data">
                <div className="exp_title">
                  <span>{exp.title}</span>
                </div>
                <div className="exp_date">
                  <span>{exp.date}</span>
                </div>
              </div>
              <p>{exp.description}</p>
              {exp.link ? (
                <a href={exp.link}>
                  <button className="exp_link">Visitar</button>
                </a>
              ) : null}
              <hr />
            </div>
          );
        })}
    </section>
  );
};

export default Experience;
