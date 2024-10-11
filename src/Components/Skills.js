import React from "react";
import { skills } from "../data";
import "../Allcss/Skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section--title text-cs">Professional Skills</h2>
      <p className="section--subtitle">
        My <span>Talent </span>
      </p> 
      <div className="skills--container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (   
            <div className="skills--item" key={index}>
              <div className="skills--titles">
                <h3 className="skills--name">{name}</h3>
                <span className="skills--number">{percentage}%</span>
                </div> 
              <p className="skills--description">{description}</p>

              <div className="skills--bar">
                <span
                  className="skills--percentage"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
