import React from "react";
import "../Allcss/Resume.css";
import { cv } from "../data";
import Card from "../Components/Card";

function Resume() {
  return ( 
    <section className="resume section" id="resume">
      <h2 className="section--title text-cs">Resume</h2>
      <p className="section--subtitle">
        My <span>Story</span>
      </p> 
      <div className="container grid">
        <div>
          <h3 className="resume--heading">Education</h3>

          <div className="resume--container grid">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    University={val.University}
                    Marks={val.Marks}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
